import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundAttachment } from '../backgroundAttachment';

describe('backgroundAttachment', () => {
  it('should return a function', () => {
    const result = backgroundAttachment();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundAttachment` as component and css prop', () => {
    const result = backgroundAttachment()({ style$BackgroundAttachment: 'inherit' });
    expect(result).toEqual({ backgroundAttachment: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundAttachment<'a'>()({ style$BackgroundAttachment: 'a' });
    expect(result).toEqual({ backgroundAttachment: 'a' });
  });

  it('should use an interface which marks `backgroundAttachment` as optional', () => {
    const result = backgroundAttachment<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundAttachment<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundAttachment: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundAttachment: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundAttachment<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundAttachment: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundAttachment: 'a',
      [theme.breakpoints.large]: {
        backgroundAttachment: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundAttachment: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundAttachment: 'd',
      },
    });
  });
});
