import cliProgress from 'cli-progress';
import * as fs from 'fs';
import { camelCase, kebabCase, upperFirst } from 'lodash/fp';
import cssProperties from 'mdn-data/css/properties.json';
import * as path from 'path';
import * as util from 'util';

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);

const utilTemplate = fs.readFileSync('./util-template.txt').toString();
const utilTestTemplate = fs.readFileSync('./util-test-template.txt').toString();
const TYPE_DECLARATION_REGEX = /.*?type(.*?)(<|=).*/;
const TYPE_NAME_REGEX = /__TYPE_NAME__/g;
const PROPERTY_NAME_REGEX = /__PROPERTY_NAME__/g;
const INTERFACE_PROPERTY_NAME_REGEX = /__INTERFACE_PROPERTY_NAME__/g;

const types = fs
  .readFileSync(
    path.resolve(
      __dirname,
      'node_modules/@johanneslumpe/css-types/lib/types.d.ts',
    ),
  )
  .toString()
  .split('\n')
  .map(
    line =>
      TYPE_DECLARATION_REGEX.test(line)
        ? line.replace(/.*?type(.*?)(<|=).*/, '$1').trim()
        : undefined,
  )
  .filter(isString)
  .sort((a, b) => (a > b ? -1 : 1));

const UTILS_BASE_PATH = path.resolve(__dirname, './src/utils');

interface IUtilData {
  __INTERFACE_PROPERTY_NAME__: string;
  __PROPERTY_NAME__: string;
  __TYPE_NAME__: string;
  directory: string;
}

function isString(val: string | undefined): val is string {
  return !!val;
}

async function mkDirNestedAsync(dirPath: string) {
  const parts = dirPath.split('/');
  let last = path.resolve(__dirname, './src');
  for (const part of parts) {
    try {
      const next = path.resolve(last, part);
      last = next;
      await mkdirAsync(next);
    } catch (e) {
      if (e.code !== 'EEXIST') {
        throw e;
      }
    }
  }
}

async function writeUtilFileAsync(data: IUtilData) {
  await mkDirNestedAsync(`utils/${data.directory}/__tests__`);

  const source = utilTemplate
    .replace(TYPE_NAME_REGEX, data.__TYPE_NAME__)
    .replace(PROPERTY_NAME_REGEX, data.__PROPERTY_NAME__)
    .replace(INTERFACE_PROPERTY_NAME_REGEX, data.__INTERFACE_PROPERTY_NAME__);
  const testSource = utilTestTemplate.replace(
    PROPERTY_NAME_REGEX,
    data.__PROPERTY_NAME__,
  );

  const utilPromise = writeFileAsync(
    path.resolve(
      UTILS_BASE_PATH,
      data.directory,
      `${data.__PROPERTY_NAME__}.ts`,
    ),
    source,
  );
  const utilTestPromise = writeFileAsync(
    path.resolve(
      UTILS_BASE_PATH,
      data.directory,
      '__tests__',
      `${data.__PROPERTY_NAME__}.ts`,
    ),
    testSource,
  );

  return Promise.all([utilPromise, utilTestPromise]);
}

async function generateUtils() {
  const utilsToGenerate = Object.keys(cssProperties)
    .map(key => {
      const prop = cssProperties[key];
      const directory = kebabCase(prop.groups[0].replace('CSS ', '').trim());
      const __PROPERTY_NAME__ = camelCase(key);
      const __INTERFACE_PROPERTY_NAME__ = upperFirst(__PROPERTY_NAME__);
      const keyLower = __PROPERTY_NAME__.toLowerCase();
      const __TYPE_NAME__ = types.find(type => {
        const typeLower = type.toLowerCase();
        return (
          `${keyLower}propertycombined` === typeLower ||
          `${keyLower}property` === typeLower ||
          keyLower === typeLower
        );
      });

      return __TYPE_NAME__
        ? {
            __INTERFACE_PROPERTY_NAME__,
            __PROPERTY_NAME__,
            __TYPE_NAME__,
            directory,
          }
        : undefined;
    })
    .filter(
      <T>(x: T | undefined): x is T => {
        return !!x;
      },
    );

  const progress = new cliProgress.Bar({
    format: 'Generating utility files... [{bar}] {percentage}% {value}/{total}',
    stopOnComplete: true,
  });

  progress.start(utilsToGenerate.length, 0);
  await Promise.all(
    utilsToGenerate.map(
      utilData =>
        writeUtilFileAsync(utilData).then(() => progress.increment(1)),
      utilsToGenerate,
    ),
  );
  // tslint:disable-next-line:no-console
  console.log('\nDone!');
}

generateUtils();
