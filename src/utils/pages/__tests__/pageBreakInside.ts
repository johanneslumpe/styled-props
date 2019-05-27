import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pageBreakInside } from '../pageBreakInside';

describe('pageBreakInside', () => {
  it('should return a function', () => {
    const result = pageBreakInside();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pageBreakInside` as component and css prop', () => {
    const result = pageBreakInside()({ style$PageBreakInside: 'inherit' });
    expect(result).toEqual({ pageBreakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakInside<'a'>()({ style$PageBreakInside: 'a' });
    expect(result).toEqual({ pageBreakInside: 'a' });
  });

  it('should use an interface which marks `pageBreakInside` as optional', () => {
    const result = pageBreakInside<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = pageBreakInside<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PageBreakInside: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pageBreakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakInside<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PageBreakInside: {
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
