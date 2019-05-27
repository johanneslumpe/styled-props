import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { resize } from '../resize';

describe('resize', () => {
  it('should return a function', () => {
    const result = resize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `resize` as component and css prop', () => {
    const result = resize()({ style$Resize: 'inherit' });
    expect(result).toEqual({ resize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = resize<'a'>()({ style$Resize: 'a' });
    expect(result).toEqual({ resize: 'a' });
  });

  it('should use an interface which marks `resize` as optional', () => {
    const result = resize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = resize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Resize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      resize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = resize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Resize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      resize: 'a',
      [theme.breakpoints.large]: {
        resize: 'b',
      },
      [theme.breakpoints.medium]: {
        resize: 'c',
      },
      [theme.breakpoints.small]: {
        resize: 'd',
      },
    });
  });
});
