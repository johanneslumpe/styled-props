import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineWidth } from '../borderInlineWidth';

describe('borderInlineWidth', () => {
  it('should return a function', () => {
    const result = borderInlineWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineWidth` as component and css prop', () => {
    const result = borderInlineWidth()({ style$BorderInlineWidth: 'inherit' });
    expect(result).toEqual({ borderInlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineWidth<'a'>()({ style$BorderInlineWidth: 'a' });
    expect(result).toEqual({ borderInlineWidth: 'a' });
  });

  it('should use an interface which marks `borderInlineWidth` as optional', () => {
    const result = borderInlineWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineWidth: 'a',
      [theme.breakpoints.large]: {
        borderInlineWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineWidth: 'd',
      },
    });
  });
});
