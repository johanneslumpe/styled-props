import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pageBreakBefore } from '../pageBreakBefore';

describe('pageBreakBefore', () => {
  it('should return a function', () => {
    const result = pageBreakBefore();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pageBreakBefore` as component and css prop', () => {
    const result = pageBreakBefore()({ style$PageBreakBefore: 'inherit' });
    expect(result).toEqual({ pageBreakBefore: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakBefore<'a'>()({ style$PageBreakBefore: 'a' });
    expect(result).toEqual({ pageBreakBefore: 'a' });
  });

  it('should use an interface which marks `pageBreakBefore` as optional', () => {
    const result = pageBreakBefore<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = pageBreakBefore<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PageBreakBefore: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pageBreakBefore: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakBefore<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PageBreakBefore: {
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
