import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStart } from '../borderInlineStart';

describe('borderInlineStart', () => {
  it('should return a function', () => {
    const result = borderInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStart` as component and css prop', () => {
    const result = borderInlineStart()({ borderInlineStart: 'inherit' });
    expect(result).toEqual({ borderInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStart<'a'>()({ borderInlineStart: 'a' });
    expect(result).toEqual({ borderInlineStart: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderInlineStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStart: 'a',
      [theme.breakpoints.large]: {
        borderInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStart: 'd',
      },
    });
  });
});
