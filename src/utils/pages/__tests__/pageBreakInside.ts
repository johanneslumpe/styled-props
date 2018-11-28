import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pageBreakInside } from '../pageBreakInside';

describe('pageBreakInside', () => {
  it('should return a function', () => {
    const result = pageBreakInside();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pageBreakInside` as component and css prop', () => {
    const result = pageBreakInside()({ pageBreakInside: 'inherit' });
    expect(result).toEqual({ pageBreakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakInside<'a'>()({ pageBreakInside: 'a' });
    expect(result).toEqual({ pageBreakInside: 'a' });
  });

  it('should use an interface which marks `pageBreakInside` as optional', () => {
    const result = pageBreakInside<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = pageBreakInside<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ pageBreakInside: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pageBreakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakInside<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      pageBreakInside: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      pageBreakInside: 'a',
      [theme.breakpoints.large]: {
        pageBreakInside: 'b',
      },
      [theme.breakpoints.medium]: {
        pageBreakInside: 'c',
      },
      [theme.breakpoints.small]: {
        pageBreakInside: 'd',
      },
    });
  });
});
