import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textAlign } from '../textAlign';

describe('textAlign', () => {
  it('should return a function', () => {
    const result = textAlign();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textAlign` as component and css prop', () => {
    const result = textAlign()({ style$TextAlign: 'inherit' });
    expect(result).toEqual({ textAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlign<'a'>()({ style$TextAlign: 'a' });
    expect(result).toEqual({ textAlign: 'a' });
  });

  it('should use an interface which marks `textAlign` as optional', () => {
    const result = textAlign<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textAlign<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextAlign: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlign<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextAlign: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textAlign: 'a',
      [theme.breakpoints.large]: {
        textAlign: 'b',
      },
      [theme.breakpoints.medium]: {
        textAlign: 'c',
      },
      [theme.breakpoints.small]: {
        textAlign: 'd',
      },
    });
  });
});
