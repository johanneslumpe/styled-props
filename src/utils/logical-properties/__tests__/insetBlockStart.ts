import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetBlockStart } from '../insetBlockStart';

describe('insetBlockStart', () => {
  it('should return a function', () => {
    const result = insetBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetBlockStart` as component and css prop', () => {
    const result = insetBlockStart()({ style$InsetBlockStart: 'inherit' });
    expect(result).toEqual({ insetBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetBlockStart<'a'>()({ style$InsetBlockStart: 'a' });
    expect(result).toEqual({ insetBlockStart: 'a' });
  });

  it('should use an interface which marks `insetBlockStart` as optional', () => {
    const result = insetBlockStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetBlockStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetBlockStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetBlockStart: 'a',
      [theme.breakpoints.large]: {
        insetBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        insetBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        insetBlockStart: 'd',
      },
    });
  });
});
