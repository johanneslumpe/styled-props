import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textUnderlinePosition } from '../textUnderlinePosition';

describe('textUnderlinePosition', () => {
  it('should return a function', () => {
    const result = textUnderlinePosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textUnderlinePosition` as component and css prop', () => {
    const result = textUnderlinePosition()({ style$TextUnderlinePosition: 'inherit' });
    expect(result).toEqual({ textUnderlinePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textUnderlinePosition<'a'>()({ style$TextUnderlinePosition: 'a' });
    expect(result).toEqual({ textUnderlinePosition: 'a' });
  });

  it('should use an interface which marks `textUnderlinePosition` as optional', () => {
    const result = textUnderlinePosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textUnderlinePosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextUnderlinePosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textUnderlinePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textUnderlinePosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextUnderlinePosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textUnderlinePosition: 'a',
      [theme.breakpoints.large]: {
        textUnderlinePosition: 'b',
      },
      [theme.breakpoints.medium]: {
        textUnderlinePosition: 'c',
      },
      [theme.breakpoints.small]: {
        textUnderlinePosition: 'd',
      },
    });
  });
});
