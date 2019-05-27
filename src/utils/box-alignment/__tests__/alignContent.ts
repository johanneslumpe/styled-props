import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { alignContent } from '../alignContent';

describe('alignContent', () => {
  it('should return a function', () => {
    const result = alignContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `alignContent` as component and css prop', () => {
    const result = alignContent()({ style$AlignContent: 'inherit' });
    expect(result).toEqual({ alignContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignContent<'a'>()({ style$AlignContent: 'a' });
    expect(result).toEqual({ alignContent: 'a' });
  });

  it('should use an interface which marks `alignContent` as optional', () => {
    const result = alignContent<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = alignContent<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AlignContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      alignContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignContent<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AlignContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      alignContent: 'a',
      [theme.breakpoints.large]: {
        alignContent: 'b',
      },
      [theme.breakpoints.medium]: {
        alignContent: 'c',
      },
      [theme.breakpoints.small]: {
        alignContent: 'd',
      },
    });
  });
});
