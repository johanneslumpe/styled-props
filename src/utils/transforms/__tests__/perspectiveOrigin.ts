import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { perspectiveOrigin } from '../perspectiveOrigin';

describe('perspectiveOrigin', () => {
  it('should return a function', () => {
    const result = perspectiveOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `perspectiveOrigin` as component and css prop', () => {
    const result = perspectiveOrigin()({ style$PerspectiveOrigin: 'inherit' });
    expect(result).toEqual({ perspectiveOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = perspectiveOrigin<'a'>()({ style$PerspectiveOrigin: 'a' });
    expect(result).toEqual({ perspectiveOrigin: 'a' });
  });

  it('should use an interface which marks `perspectiveOrigin` as optional', () => {
    const result = perspectiveOrigin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = perspectiveOrigin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PerspectiveOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      perspectiveOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = perspectiveOrigin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PerspectiveOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      perspectiveOrigin: 'a',
      [theme.breakpoints.large]: {
        perspectiveOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        perspectiveOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        perspectiveOrigin: 'd',
      },
    });
  });
});
