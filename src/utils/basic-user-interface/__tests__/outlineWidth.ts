import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineWidth } from '../outlineWidth';

describe('outlineWidth', () => {
  it('should return a function', () => {
    const result = outlineWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineWidth` as component and css prop', () => {
    const result = outlineWidth()({ style$OutlineWidth: 'inherit' });
    expect(result).toEqual({ outlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineWidth<'a'>()({ style$OutlineWidth: 'a' });
    expect(result).toEqual({ outlineWidth: 'a' });
  });

  it('should use an interface which marks `outlineWidth` as optional', () => {
    const result = outlineWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = outlineWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OutlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OutlineWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineWidth: 'a',
      [theme.breakpoints.large]: {
        outlineWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineWidth: 'c',
      },
      [theme.breakpoints.small]: {
        outlineWidth: 'd',
      },
    });
  });
});
