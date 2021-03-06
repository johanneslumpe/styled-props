import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEnd } from '../borderInlineEnd';

describe('borderInlineEnd', () => {
  it('should return a function', () => {
    const result = borderInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEnd` as component and css prop', () => {
    const result = borderInlineEnd()({ style$BorderInlineEnd: 'inherit' });
    expect(result).toEqual({ borderInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEnd<'a'>()({ style$BorderInlineEnd: 'a' });
    expect(result).toEqual({ borderInlineEnd: 'a' });
  });

  it('should use an interface which marks `borderInlineEnd` as optional', () => {
    const result = borderInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEnd: 'a',
      [theme.breakpoints.large]: {
        borderInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEnd: 'd',
      },
    });
  });
});
