import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { quotes } from '../quotes';

describe('quotes', () => {
  it('should return a function', () => {
    const result = quotes();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `quotes` as component and css prop', () => {
    const result = quotes()({ quotes: 'inherit' });
    expect(result).toEqual({ quotes: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = quotes<'a'>()({ quotes: 'a' });
    expect(result).toEqual({ quotes: 'a' });
  });

  it('should allow using a theme', () => {
    const result = quotes<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ quotes: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      quotes: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = quotes<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      quotes: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      quotes: 'a',
      [theme.breakpoints.large]: {
        quotes: 'b',
      },
      [theme.breakpoints.medium]: {
        quotes: 'c',
      },
      [theme.breakpoints.small]: {
        quotes: 'd',
      },
    });
  });
});
