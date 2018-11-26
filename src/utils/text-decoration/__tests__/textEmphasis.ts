import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasis } from '../textEmphasis';

describe('textEmphasis', () => {
  it('should return a function', () => {
    const result = textEmphasis();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasis` as component and css prop', () => {
    const result = textEmphasis()({ textEmphasis: 'inherit' });
    expect(result).toEqual({ textEmphasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasis<'a'>()({ textEmphasis: 'a' });
    expect(result).toEqual({ textEmphasis: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textEmphasis<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textEmphasis: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasis<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textEmphasis: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textEmphasis: 'a',
      [theme.breakpoints.large]: {
        textEmphasis: 'b',
      },
      [theme.breakpoints.medium]: {
        textEmphasis: 'c',
      },
      [theme.breakpoints.small]: {
        textEmphasis: 'd',
      },
    });
  });
});
