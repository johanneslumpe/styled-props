import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pageBreakBefore } from '../pageBreakBefore';

describe('pageBreakBefore', () => {
  it('should return a function', () => {
    const result = pageBreakBefore();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pageBreakBefore` as component and css prop', () => {
    const result = pageBreakBefore()({ pageBreakBefore: 'inherit' });
    expect(result).toEqual({ pageBreakBefore: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakBefore<'a'>()({ pageBreakBefore: 'a' });
    expect(result).toEqual({ pageBreakBefore: 'a' });
  });

  it('should allow using a theme', () => {
    const result = pageBreakBefore<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ pageBreakBefore: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pageBreakBefore: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakBefore<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      pageBreakBefore: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      pageBreakBefore: 'a',
      [theme.breakpoints.large]: {
        pageBreakBefore: 'b',
      },
      [theme.breakpoints.medium]: {
        pageBreakBefore: 'c',
      },
      [theme.breakpoints.small]: {
        pageBreakBefore: 'd',
      },
    });
  });
});
