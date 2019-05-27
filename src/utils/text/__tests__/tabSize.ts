import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { tabSize } from '../tabSize';

describe('tabSize', () => {
  it('should return a function', () => {
    const result = tabSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `tabSize` as component and css prop', () => {
    const result = tabSize()({ style$TabSize: 'inherit' });
    expect(result).toEqual({ tabSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = tabSize<'a'>()({ style$TabSize: 'a' });
    expect(result).toEqual({ tabSize: 'a' });
  });

  it('should use an interface which marks `tabSize` as optional', () => {
    const result = tabSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = tabSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TabSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      tabSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = tabSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TabSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      tabSize: 'a',
      [theme.breakpoints.large]: {
        tabSize: 'b',
      },
      [theme.breakpoints.medium]: {
        tabSize: 'c',
      },
      [theme.breakpoints.small]: {
        tabSize: 'd',
      },
    });
  });
});
