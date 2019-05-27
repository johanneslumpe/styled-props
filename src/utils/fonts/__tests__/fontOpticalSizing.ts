import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontOpticalSizing } from '../fontOpticalSizing';

describe('fontOpticalSizing', () => {
  it('should return a function', () => {
    const result = fontOpticalSizing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontOpticalSizing` as component and css prop', () => {
    const result = fontOpticalSizing()({ style$FontOpticalSizing: 'inherit' });
    expect(result).toEqual({ fontOpticalSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontOpticalSizing<'a'>()({ style$FontOpticalSizing: 'a' });
    expect(result).toEqual({ fontOpticalSizing: 'a' });
  });

  it('should use an interface which marks `fontOpticalSizing` as optional', () => {
    const result = fontOpticalSizing<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontOpticalSizing<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontOpticalSizing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontOpticalSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontOpticalSizing<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontOpticalSizing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontOpticalSizing: 'a',
      [theme.breakpoints.large]: {
        fontOpticalSizing: 'b',
      },
      [theme.breakpoints.medium]: {
        fontOpticalSizing: 'c',
      },
      [theme.breakpoints.small]: {
        fontOpticalSizing: 'd',
      },
    });
  });
});
