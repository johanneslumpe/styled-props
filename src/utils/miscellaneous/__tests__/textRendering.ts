import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textRendering } from '../textRendering';

describe('textRendering', () => {
  it('should return a function', () => {
    const result = textRendering();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textRendering` as component and css prop', () => {
    const result = textRendering()({ style$TextRendering: 'inherit' });
    expect(result).toEqual({ textRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textRendering<'a'>()({ style$TextRendering: 'a' });
    expect(result).toEqual({ textRendering: 'a' });
  });

  it('should use an interface which marks `textRendering` as optional', () => {
    const result = textRendering<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textRendering<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextRendering: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textRendering<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextRendering: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textRendering: 'a',
      [theme.breakpoints.large]: {
        textRendering: 'b',
      },
      [theme.breakpoints.medium]: {
        textRendering: 'c',
      },
      [theme.breakpoints.small]: {
        textRendering: 'd',
      },
    });
  });
});
