import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingInlineEnd } from '../paddingInlineEnd';

describe('paddingInlineEnd', () => {
  it('should return a function', () => {
    const result = paddingInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineEnd` as component and css prop', () => {
    const result = paddingInlineEnd()({ paddingInlineEnd: 'inherit' });
    expect(result).toEqual({ paddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineEnd<'a'>()({ paddingInlineEnd: 'a' });
    expect(result).toEqual({ paddingInlineEnd: 'a' });
  });

  it('should allow using a theme', () => {
    const result = paddingInlineEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingInlineEnd: 'a',
      [theme.breakpoints.large]: {
        paddingInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        paddingInlineEnd: 'd',
      },
    });
  });
});
