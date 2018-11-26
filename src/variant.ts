import { BREAKPOINTS_BASE_VALUE_KEY } from './constants';
import { createBreakpointStyles } from './createBreakpointStyles';
import { IStyles, IVariantOptions, WithTheme } from './types';

export function variant<P, T extends {}, B extends {} = never>({
  prop,
  themeProp,
}: IVariantOptions<P, T>) {
  let breakpointKeys: string[];
  return function variantImplementation(
    props: WithTheme<P, T, B>,
  ): IStyles | undefined {
    const propValue = props[prop];
    if (!propValue || !props.theme) {
      return undefined;
    }

    const themeValue = props.theme[themeProp] as { [index: string]: any };
    if (!themeValue) {
      return undefined;
    }

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return themeValue[propValue.toString()];
    }

    const { breakpoints } = props.theme;
    const bpkeys =
      breakpointKeys ||
      (breakpointKeys = [BREAKPOINTS_BASE_VALUE_KEY].concat(
        Object.keys(breakpoints),
      ));
    return createBreakpointStyles(props.theme, bpkeys, propValue, themeValue);
  };
}
