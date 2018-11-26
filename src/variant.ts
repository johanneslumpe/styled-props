import { BREAKPOINTS_BASE_VALUE_KEY } from './constants';
import { createBreakpointStyles } from './createBreakpointStyles';
import { IDictionary, IStyles, IVariantOptions, WithTheme } from './types';

const BASE_EMPTY_OBJECT = {};
const BASE_EMPTY_INDEXED_OBJECT: IDictionary<any> = BASE_EMPTY_OBJECT;

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
    return createBreakpointStyles(
      props.theme,
      themeValue || BASE_EMPTY_INDEXED_OBJECT,
      bpkeys,
      propValue,
    );
  };
}
