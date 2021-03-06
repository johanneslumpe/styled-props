import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pointerEvents } from '../pointerEvents';

describe('pointerEvents', () => {
  it('should return a function', () => {
    const result = pointerEvents();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pointerEvents` as component and css prop', () => {
    const result = pointerEvents()({ style$PointerEvents: 'inherit' });
    expect(result).toEqual({ pointerEvents: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pointerEvents<'a'>()({ style$PointerEvents: 'a' });
    expect(result).toEqual({ pointerEvents: 'a' });
  });

  it('should use an interface which marks `pointerEvents` as optional', () => {
    const result = pointerEvents<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = pointerEvents<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PointerEvents: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pointerEvents: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pointerEvents<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PointerEvents: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      pointerEvents: 'a',
      [theme.breakpoints.large]: {
        pointerEvents: 'b',
      },
      [theme.breakpoints.medium]: {
        pointerEvents: 'c',
      },
      [theme.breakpoints.small]: {
        pointerEvents: 'd',
      },
    });
  });
});
