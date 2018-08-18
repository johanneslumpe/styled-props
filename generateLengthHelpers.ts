import { readFileSync, writeFileSync } from 'fs';
import units, { CSSUnitGroups } from 'mdn-data/css/units.json';
import * as path from 'path';
import * as ts from 'typescript';

function createUnitFunctionDeclaration(
  typeInterface: ts.InterfaceDeclaration,
  unit: string,
  name: string,
): ts.FunctionDeclaration {
  const parameterName = 'value';
  return ts.createFunctionDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    undefined,
    name.toLowerCase(),
    [],
    [
      ts.createParameter(
        [],
        [],
        undefined,
        parameterName,
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      ),
    ],
    ts.createTypeReferenceNode(typeInterface.name, []),
    ts.createBlock([
      ts.createReturn(
        ts.createAsExpression(
          ts.createTemplateExpression(ts.createTemplateHead(''), [
            ts.createTemplateSpan(
              ts.createIdentifier(parameterName),
              ts.createTemplateTail(unit),
            ),
          ]),
          ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
        ),
      ),
    ]),
  );
}

function createBrandedTypeInterfaceForUnit(unit: string, name: string) {
  return ts.createInterfaceDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.createIdentifier(
      `I${name.substr(0, 1).toUpperCase()}${name.substr(1)}Value`,
    ),
    [],
    [
      ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.createExpressionWithTypeArguments([], ts.createIdentifier('String')),
      ]),
    ],
    [
      ts.createPropertySignature(
        [],
        `__${unit}_brand_type__`,
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
        undefined,
      ),
    ],
  );
}

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

/**
 * Mapping of unit to name for units
 * which cannot be expressed in TS/JS due to them being keywords
 */
const unitToNameMap: { [unit: string]: string } = {
  in: 'Inch',
};

/**
 * The length value tags of values we want to create
 * helpers for
 */
const lengthValueTags: CSSUnitGroups[] = [
  'CSS Flexible Lengths',
  'CSS Lengths',
];

const statements: ts.Statement[] = [];

const src = ts.createSourceFile(
  `cssLengthUtils.ts`,
  '',
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS,
);

Object.keys(units).forEach(key => {
  const unit = units[key];
  if (unit.groups.some(value => lengthValueTags.includes(value))) {
    const name = unitToNameMap[key] || key;
    const interfaceDeclaration = createBrandedTypeInterfaceForUnit(key, name);
    const functionDeclaration = createUnitFunctionDeclaration(
      interfaceDeclaration,
      key,
      name,
    );
    statements.push(interfaceDeclaration);
    statements.push(functionDeclaration);
  }
});

const finalPath = path.join(__dirname, 'src/', src.fileName);
writeFileSync(
  finalPath,
  printer.printFile(ts.updateSourceFileNode(src, statements)),
);
