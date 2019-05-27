import { BREAKPOINTS_BASE_VALUE_KEY } from './constants';
import { createBreakpointStyles } from './createBreakpointStyles';
import { StyleOptions, Styles, WithTheme } from './types';

const DEFAULT_ARRAY_RESOLVER = (value: Array<string | number>) =>
  value.join(' ');

export function style<P, T extends {} = never, B extends {} = never>({
  cssProp,
  prop,
  themeProp,
  arrayResolver = DEFAULT_ARRAY_RESOLVER,
}: StyleOptions<P, T>) {
  let breakpointKeys: string[];
  return function styleImplementation(
    props: WithTheme<P, T, B>,
  ): Styles | undefined {
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
    }

    const { breakpoints } = props.theme;
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

    return createBreakpointStyles(
      props.theme,
      bpkeys,
      finalValue,
      themeValue,
      cssProp,
      arrayResolver,
    );
  };
}
