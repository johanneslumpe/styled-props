import { IDictionary, IStyleOptions, IStyles, WithTheme } from './types';

const BASE_EMPTY_OBJECT = {};
const BASE_EMPTY_INDEXED_OBJECT: IDictionary<any> = BASE_EMPTY_OBJECT;
const BREAKPOINTS_BASE_VALUE_KEY = 'base';

const DEFAULT_ARRAY_RESOLVER = (value: Array<string | number>) =>
  value.join(' ');

export function style<P, T extends {} = never, B extends {} = never>({
  cssProp,
  prop,
  themeProp,
  arrayResolver = DEFAULT_ARRAY_RESOLVER,
}: IStyleOptions<P, T>) {
  let breakpointKeys: string[];
  return function styleImplementation(
    props: WithTheme<P, T, B>,
  ): IStyles | undefined {
    const propValue = props[prop];
    if (propValue === undefined || propValue === null) {
      return undefined;
    }

    const themeValue =
      themeProp && props.theme
        ? (props.theme[themeProp] as { [index: string]: any })
        : undefined;

    const finalValue =
      themeValue &&
      (typeof propValue === 'string' || typeof propValue === 'number') &&
      Object(themeValue) === themeValue
        ? themeValue[propValue] || propValue
        : Array.isArray(propValue)
          ? arrayResolver(propValue, themeValue as any)
          : propValue;

    if (typeof finalValue === 'string' || typeof finalValue === 'number') {
      return {
        [cssProp]: finalValue,
      };
    } else if (!props.theme || !props.theme.breakpoints) {
      return undefined;
    } else {
      const result: IStyles = {};
      const { breakpoints } = props.theme;
      const themeVal = themeValue || BASE_EMPTY_INDEXED_OBJECT;
      // We rely on the fact that `Object.keys` enumerates keys in the way
      // they are added to an object. This should be consistent across engines.
      // In case that a bug is discovered we will have to switch to an implicit
      // ordering passed in by the consumer.
      // This also prevents dynamic theme changes. If we want to support this
      // in the future we have to store `theme` as well and do an equality check
      // to determine when to re-generate breakpoint keys;
      const bpkeys =
        breakpointKeys ||
        (breakpointKeys = [BREAKPOINTS_BASE_VALUE_KEY].concat(
          Object.keys(breakpoints),
        ));

      return (bpkeys as Array<Extract<keyof typeof finalValue, string>>).reduce(
        (acc, key) => {
          const value = finalValue[key];
          const val = themeVal[value] || value;
          if (value === undefined) {
            return acc;
          }
          if (key === BREAKPOINTS_BASE_VALUE_KEY) {
            acc[cssProp] = val;
          } else {
            const breakpointValue: string = (breakpoints as IDictionary<any>)[
              key.toString()
            ];
            acc[breakpointValue] = {
              [cssProp]: val,
            };
          }
          return acc;
        },
        result,
      );
    }
  };
}
