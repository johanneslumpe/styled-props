import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textAlign } from '../textAlign';

describe('textAlign', () => {
  it('should return a function', () => {
    const result = textAlign();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textAlign` as component and css prop', () => {
    const result = textAlign()({ textAlign: 'inherit' });
    expect(result).toEqual({ textAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlign<'a'>()({ textAlign: 'a' });
    expect(result).toEqual({ textAlign: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textAlign<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textAlign: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlign<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textAlign: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textAlign: 'a',
      [theme.breakpoints.large]: {
        textAlign: 'b',
      },
      [theme.breakpoints.medium]: {
        textAlign: 'c',
      },
      [theme.breakpoints.small]: {
        textAlign: 'd',
      },
    });
  });
});
