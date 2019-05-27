import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { writingMode } from '../writingMode';

describe('writingMode', () => {
  it('should return a function', () => {
    const result = writingMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `writingMode` as component and css prop', () => {
    const result = writingMode()({ style$WritingMode: 'inherit' });
    expect(result).toEqual({ writingMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = writingMode<'a'>()({ style$WritingMode: 'a' });
    expect(result).toEqual({ writingMode: 'a' });
  });

  it('should use an interface which marks `writingMode` as optional', () => {
    const result = writingMode<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = writingMode<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$WritingMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      writingMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = writingMode<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$WritingMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      writingMode: 'a',
      [theme.breakpoints.large]: {
        writingMode: 'b',
      },
      [theme.breakpoints.medium]: {
        writingMode: 'c',
      },
      [theme.breakpoints.small]: {
        writingMode: 'd',
      },
    });
  });
});
