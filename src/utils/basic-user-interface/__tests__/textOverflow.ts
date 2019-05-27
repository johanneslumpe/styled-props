import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textOverflow } from '../textOverflow';

describe('textOverflow', () => {
  it('should return a function', () => {
    const result = textOverflow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textOverflow` as component and css prop', () => {
    const result = textOverflow()({ style$TextOverflow: 'inherit' });
    expect(result).toEqual({ textOverflow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textOverflow<'a'>()({ style$TextOverflow: 'a' });
    expect(result).toEqual({ textOverflow: 'a' });
  });

  it('should use an interface which marks `textOverflow` as optional', () => {
    const result = textOverflow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textOverflow<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextOverflow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textOverflow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textOverflow<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextOverflow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textOverflow: 'a',
      [theme.breakpoints.large]: {
        textOverflow: 'b',
      },
      [theme.breakpoints.medium]: {
        textOverflow: 'c',
      },
      [theme.breakpoints.small]: {
        textOverflow: 'd',
      },
    });
  });
});
