import { BREAKPOINTS_BASE_VALUE_KEY } from './constants';
import { IDictionary, IStyles } from './types';

const BASE_EMPTY_OBJECT = {};
const BASE_EMPTY_INDEXED_OBJECT: IDictionary<any> = BASE_EMPTY_OBJECT;

export function createBreakpointStyles<
  T extends { breakpoints: { [index: string]: string } }
>(
  theme: T,
  breakpointKeys: string[],
  propValue: { [index: string]: any },
  themeValue: { [index: string]: any } = BASE_EMPTY_INDEXED_OBJECT,
  cssProp?: string,
  arrayResolver?: (value: Array<string | number>) => string,
) {
  const result: IStyles = {};
  const { breakpoints } = theme;
  const themeVal = themeValue;

  return breakpointKeys.reduce((acc, key) => {
    const value = propValue[key];
    const val = themeVal[value] || value;
    if (value === undefined) {
      return acc;
    }
    if (key === BREAKPOINTS_BASE_VALUE_KEY) {
      // shallow clone because we are not mutating any deep values
      return cssProp
        ? {
            [cssProp]:
              Array.isArray(val) && arrayResolver ? arrayResolver(val) : val,
          }
        : { ...val };
    } else {
      const breakpointValue = (breakpoints as IDictionary<string>)[
        key.toString()
      ];
      acc[breakpointValue] = cssProp
        ? {
            [cssProp]:
              Array.isArray(val) && arrayResolver ? arrayResolver(val) : val,
          }
        : val;
    }
    return acc;
  }, result);
}
