import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { position } from '../position';

describe('position', () => {
  it('should return a function', () => {
    const result = position();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `position` as component and css prop', () => {
    const result = position()({ style$Position: 'inherit' });
    expect(result).toEqual({ position: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = position<'a'>()({ style$Position: 'a' });
    expect(result).toEqual({ position: 'a' });
  });

  it('should use an interface which marks `position` as optional', () => {
    const result = position<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = position<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Position: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      position: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = position<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Position: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      position: 'a',
      [theme.breakpoints.large]: {
        position: 'b',
      },
      [theme.breakpoints.medium]: {
        position: 'c',
      },
      [theme.breakpoints.small]: {
        position: 'd',
      },
    });
  });
});
