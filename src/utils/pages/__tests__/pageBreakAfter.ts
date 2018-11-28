import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pageBreakAfter } from '../pageBreakAfter';

describe('pageBreakAfter', () => {
  it('should return a function', () => {
    const result = pageBreakAfter();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pageBreakAfter` as component and css prop', () => {
    const result = pageBreakAfter()({ pageBreakAfter: 'inherit' });
    expect(result).toEqual({ pageBreakAfter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakAfter<'a'>()({ pageBreakAfter: 'a' });
    expect(result).toEqual({ pageBreakAfter: 'a' });
  });

  it('should use an interface which marks `pageBreakAfter` as optional', () => {
    const result = pageBreakAfter<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = pageBreakAfter<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ pageBreakAfter: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pageBreakAfter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakAfter<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      pageBreakAfter: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      pageBreakAfter: 'a',
      [theme.breakpoints.large]: {
        pageBreakAfter: 'b',
      },
      [theme.breakpoints.medium]: {
        pageBreakAfter: 'c',
      },
      [theme.breakpoints.small]: {
        pageBreakAfter: 'd',
      },
    });
  });
});
