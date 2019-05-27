import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { captionSide } from '../captionSide';

describe('captionSide', () => {
  it('should return a function', () => {
    const result = captionSide();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `captionSide` as component and css prop', () => {
    const result = captionSide()({ style$CaptionSide: 'inherit' });
    expect(result).toEqual({ captionSide: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = captionSide<'a'>()({ style$CaptionSide: 'a' });
    expect(result).toEqual({ captionSide: 'a' });
  });

  it('should use an interface which marks `captionSide` as optional', () => {
    const result = captionSide<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = captionSide<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$CaptionSide: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      captionSide: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = captionSide<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$CaptionSide: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      captionSide: 'a',
      [theme.breakpoints.large]: {
        captionSide: 'b',
      },
      [theme.breakpoints.medium]: {
        captionSide: 'c',
      },
      [theme.breakpoints.small]: {
        captionSide: 'd',
      },
    });
  });
});
