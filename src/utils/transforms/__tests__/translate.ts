import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { translate } from '../translate';

describe('translate', () => {
  it('should return a function', () => {
    const result = translate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `translate` as component and css prop', () => {
    const result = translate()({ style$Translate: 'inherit' });
    expect(result).toEqual({ translate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = translate<'a'>()({ style$Translate: 'a' });
    expect(result).toEqual({ translate: 'a' });
  });

  it('should use an interface which marks `translate` as optional', () => {
    const result = translate<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = translate<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Translate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      translate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = translate<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Translate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      translate: 'a',
      [theme.breakpoints.large]: {
        translate: 'b',
      },
      [theme.breakpoints.medium]: {
        translate: 'c',
      },
      [theme.breakpoints.small]: {
        translate: 'd',
      },
    });
  });
});
