import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { top } from '../top';

describe('top', () => {
  it('should return a function', () => {
    const result = top();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `top` as component and css prop', () => {
    const result = top()({ top: 'inherit' });
    expect(result).toEqual({ top: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = top<'a'>()({ top: 'a' });
    expect(result).toEqual({ top: 'a' });
  });

  it('should use an interface which marks `top` as optional', () => {
    const result = top<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = top<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ top: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      top: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = top<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      top: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      top: 'a',
      [theme.breakpoints.large]: {
        top: 'b',
      },
      [theme.breakpoints.medium]: {
        top: 'c',
      },
      [theme.breakpoints.small]: {
        top: 'd',
      },
    });
  });
});
