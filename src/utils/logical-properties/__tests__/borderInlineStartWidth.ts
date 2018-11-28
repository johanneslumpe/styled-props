import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStartWidth } from '../borderInlineStartWidth';

describe('borderInlineStartWidth', () => {
  it('should return a function', () => {
    const result = borderInlineStartWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartWidth` as component and css prop', () => {
    const result = borderInlineStartWidth()({ borderInlineStartWidth: 'inherit' });
    expect(result).toEqual({ borderInlineStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartWidth<'a'>()({ borderInlineStartWidth: 'a' });
    expect(result).toEqual({ borderInlineStartWidth: 'a' });
  });

  it('should use an interface which marks `borderInlineStartWidth` as optional', () => {
    const result = borderInlineStartWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineStartWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStartWidth: 'a',
      [theme.breakpoints.large]: {
        borderInlineStartWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStartWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStartWidth: 'd',
      },
    });
  });
});
