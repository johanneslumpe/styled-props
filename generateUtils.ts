import axios from 'axios';
import cheerio from 'cheerio';
import cliProgress from 'cli-progress';
import * as fs from 'fs';
import { camelCase, chunk, kebabCase, upperFirst } from 'lodash/fp';
import { IRawProperties } from 'mdn-data';
import cssProperties from 'mdn-data/css/properties.json';
import * as path from 'path';
import TurndownService from 'turndown';
import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);

// Using basic string replacements and txt templates
// instead of the typescript ast for now,
// because there is no need for anything more complex yet.
const utilTemplate = fs.readFileSync('./util-template.txt').toString();
const utilTestTemplate = fs.readFileSync('./util-test-template.txt').toString();
const TYPE_DECLARATION_REGEX = /.*?type(.*?)(<|=).*/;
const TYPE_NAME_REGEX = /__TYPE_NAME__/g;
const PROPERTY_NAME_REGEX = /__PROPERTY_NAME__/g;
const INTERFACE_PROPERTY_NAME_REGEX = /__INTERFACE_PROPERTY_NAME__/g;
const INTERFACE_PROPERTY_COMMENT_TOKEN = '__INTERFACE_PROPERTY_COMMENT__';

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
  comment?: string;
  interfacePropertyName: string;
  propertyName: string;
  typeName: string;
  directory: string;
  url: string;
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
    .replace(TYPE_NAME_REGEX, data.typeName)
    .replace(PROPERTY_NAME_REGEX, data.propertyName)
    .replace(INTERFACE_PROPERTY_NAME_REGEX, data.interfacePropertyName)
    .replace(
      INTERFACE_PROPERTY_COMMENT_TOKEN,
      (data.comment &&
        `/**
   * ${data.comment}
   * 
   * @see ${data.url}
   */`) ||
        '',
    );

  const testSource = utilTestTemplate.replace(
    PROPERTY_NAME_REGEX,
    data.propertyName,
  );

  const utilPromise = writeFileAsync(
    path.resolve(UTILS_BASE_PATH, data.directory, `${data.propertyName}.ts`),
    source,
  );
  const utilTestPromise = writeFileAsync(
    path.resolve(
      UTILS_BASE_PATH,
      data.directory,
      '__tests__',
      `${data.propertyName}.ts`,
    ),
    testSource,
  );

  return Promise.all([utilPromise, utilTestPromise]);
}

function generateUtilsWithComments(
  dataToProcess: IUtilData[],
  progress: cliProgress.Bar,
) {
  const chunked = chunk(10, dataToProcess);
  const turndownService = new TurndownService();
  turndownService.addRule('links', {
    filter: ['a'],
    replacement(content: string) {
      return content;
    },
  });
  return chunked.reduce(
    (acc, item) =>
      acc.then(async data => {
        const dataWithComments = await Promise.all(
          item.map(async i => {
            const result = await axios.get(i.url);
            const $ = cheerio.load(result.data);
            const comment = turndownService.turndown(
              $('#wikiArticle > p:not(:empty)')
                .first()
                .html(),
            );
            const utilData = { ...i, comment };
            await writeUtilFileAsync(utilData);
            progress.increment(1);
            return utilData;
          }),
        );

        return data.concat(dataWithComments);
      }),
    Promise.resolve([] as IUtilData[]),
  );
}

async function generateUtils() {
  const utilsToGenerate = Object.keys(cssProperties)
    .map(key => {
      const prop = cssProperties[key];
      const directory = kebabCase(prop.groups[0].replace('CSS ', '').trim());
      const propertyName = camelCase(key);
      const interfacePropertyName = upperFirst(propertyName);
      const keyLower = propertyName.toLowerCase();
      const typeName = types.find(type => {
        const typeLower = type.toLowerCase();
        return (
          `${keyLower}propertycombined` === typeLower ||
          `${keyLower}property` === typeLower ||
          keyLower === typeLower
        );
      });

      return typeName
        ? {
            interfacePropertyName,
            propertyName,
            typeName,
            directory,
            url: prop.mdn_url,
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
  await generateUtilsWithComments(utilsToGenerate, progress);
  // tslint:disable-next-line:no-console
  console.log('\nDone!');
}

generateUtils();
