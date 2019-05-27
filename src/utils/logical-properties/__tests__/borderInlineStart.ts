import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStart } from '../borderInlineStart';

describe('borderInlineStart', () => {
  it('should return a function', () => {
    const result = borderInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStart` as component and css prop', () => {
    const result = borderInlineStart()({ style$BorderInlineStart: 'inherit' });
    expect(result).toEqual({ borderInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStart<'a'>()({ style$BorderInlineStart: 'a' });
    expect(result).toEqual({ borderInlineStart: 'a' });
  });

  it('should use an interface which marks `borderInlineStart` as optional', () => {
    const result = borderInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStart: 'a',
      [theme.breakpoints.large]: {
        borderInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStart: 'd',
      },
    });
  });
});
