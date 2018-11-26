import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textAlignLast } from '../textAlignLast';

describe('textAlignLast', () => {
  it('should return a function', () => {
    const result = textAlignLast();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textAlignLast` as component and css prop', () => {
    const result = textAlignLast()({ textAlignLast: 'inherit' });
    expect(result).toEqual({ textAlignLast: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlignLast<'a'>()({ textAlignLast: 'a' });
    expect(result).toEqual({ textAlignLast: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textAlignLast<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textAlignLast: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textAlignLast: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlignLast<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textAlignLast: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textAlignLast: 'a',
      [theme.breakpoints.large]: {
        textAlignLast: 'b',
      },
      [theme.breakpoints.medium]: {
        textAlignLast: 'c',
      },
      [theme.breakpoints.small]: {
        textAlignLast: 'd',
      },
    });
  });
});
