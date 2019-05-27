import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { orphans } from '../orphans';

describe('orphans', () => {
  it('should return a function', () => {
    const result = orphans();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `orphans` as component and css prop', () => {
    const result = orphans()({ style$Orphans: 'inherit' });
    expect(result).toEqual({ orphans: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = orphans<'a'>()({ style$Orphans: 'a' });
    expect(result).toEqual({ orphans: 'a' });
  });

  it('should use an interface which marks `orphans` as optional', () => {
    const result = orphans<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = orphans<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Orphans: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      orphans: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = orphans<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Orphans: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      orphans: 'a',
      [theme.breakpoints.large]: {
        orphans: 'b',
      },
      [theme.breakpoints.medium]: {
        orphans: 'c',
      },
      [theme.breakpoints.small]: {
        orphans: 'd',
      },
    });
  });
});
