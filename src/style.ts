import { IStyleOptions, IStyles, ResponsiveObject, WithTheme } from './types';

const BASE_EMPTY_OBJECT = {};
const BREAKPOINTS_BASE_VALUE_KEY = 'base';

export function style<P, T = {}, B = never>({
  cssProp,
  prop,
  themeProp,
}: IStyleOptions<P, T>) {
  return (props: WithTheme<P, T, B>): IStyles | undefined => {
    const propValue = props[prop];
    if (propValue === undefined || propValue === null) {
      return undefined;
    }

    const themeValue = themeProp
      ? (props.theme[themeProp] as { [index: string]: any })
      : undefined;
    const finalValue =
      themeValue &&
      (typeof propValue === 'string' || typeof propValue === 'number') &&
      Object(themeValue) === themeValue
        ? themeValue[propValue] || propValue
        : propValue;

    if (typeof finalValue === 'string' || typeof finalValue === 'number') {
      return {
        [cssProp]: finalValue,
      };
    } else {
      // we know that we can only have passed in an object at this point because
      // our types do not permit anything else, so asserting the type here
      // should be fine
      const styles = finalValue as ResponsiveObject<P, B>;
      const result: IStyles = {};
      const keys = Object.keys(styles) as Array<keyof typeof style>;

      if (!keys.length) {
        return undefined;
      }

      const { theme } = props;
      const { breakpoints = BASE_EMPTY_OBJECT } = theme;
      const themeVal = themeValue || BASE_EMPTY_OBJECT;

      return keys.reduce((acc, key) => {
        const value = styles[key];
        const val = themeVal[value] || value;
        if (key === BREAKPOINTS_BASE_VALUE_KEY) {
          acc[cssProp] = val;
        } else {
          acc[breakpoints[key]] = {
            [cssProp]: val,
          };
        }
        return acc;
      }, result);
    }
  };
}
