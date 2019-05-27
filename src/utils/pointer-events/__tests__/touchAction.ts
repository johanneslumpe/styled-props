import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { touchAction } from '../touchAction';

describe('touchAction', () => {
  it('should return a function', () => {
    const result = touchAction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `touchAction` as component and css prop', () => {
    const result = touchAction()({ style$TouchAction: 'inherit' });
    expect(result).toEqual({ touchAction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = touchAction<'a'>()({ style$TouchAction: 'a' });
    expect(result).toEqual({ touchAction: 'a' });
  });

  it('should use an interface which marks `touchAction` as optional', () => {
    const result = touchAction<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = touchAction<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TouchAction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      touchAction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = touchAction<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TouchAction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      touchAction: 'a',
      [theme.breakpoints.large]: {
        touchAction: 'b',
      },
      [theme.breakpoints.medium]: {
        touchAction: 'c',
      },
      [theme.breakpoints.small]: {
        touchAction: 'd',
      },
    });
  });
});
