import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingInlineStart } from '../paddingInlineStart';

describe('paddingInlineStart', () => {
  it('should return a function', () => {
    const result = paddingInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineStart` as component and css prop', () => {
    const result = paddingInlineStart()({ paddingInlineStart: 'inherit' });
    expect(result).toEqual({ paddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineStart<'a'>()({ paddingInlineStart: 'a' });
    expect(result).toEqual({ paddingInlineStart: 'a' });
  });

  it('should use an interface which marks `paddingInlineStart` as optional', () => {
    const result = paddingInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingInlineStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingInlineStart: 'a',
      [theme.breakpoints.large]: {
        paddingInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        paddingInlineStart: 'd',
      },
    });
  });
});
