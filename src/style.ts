import {
  IStyleOptions,
  IStyles,
  ResponsivePropValue,
  WithTheme,
} from './types';

const BASE_EMPTY_OBJECT: { [index: string]: string } = {};
const BREAKPOINTS_BASE_VALUE_KEY = 'base';

export function style<P, T = {}, B = never>({
  cssProp,
  prop,
  themeProp,
}: IStyleOptions<P, T>) {
  let breakpointKeys: string[];
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
      const styles = finalValue as ResponsivePropValue<typeof finalValue, B>;
      const result: IStyles = {};
      const { theme } = props;
      const { breakpoints = BASE_EMPTY_OBJECT } = theme;
      const themeVal = themeValue || BASE_EMPTY_OBJECT;
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

      return (bpkeys as Array<Extract<keyof typeof styles, string>>).reduce(
        (acc, key) => {
          // TODO how to get around the cast to any?
          const value: string = styles[key] as any;
          const val = themeVal[value] || value;
          if (value === undefined) {
            return acc;
          }
          if (key === BREAKPOINTS_BASE_VALUE_KEY) {
            acc[cssProp] = val;
          } else {
            // TODO how to get around the cast to any?
            const breakpointValue: string = breakpoints[key] as any;
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
