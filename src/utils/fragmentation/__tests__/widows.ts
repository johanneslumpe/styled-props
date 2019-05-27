import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { widows } from '../widows';

describe('widows', () => {
  it('should return a function', () => {
    const result = widows();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `widows` as component and css prop', () => {
    const result = widows()({ style$Widows: 'inherit' });
    expect(result).toEqual({ widows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = widows<'a'>()({ style$Widows: 'a' });
    expect(result).toEqual({ widows: 'a' });
  });

  it('should use an interface which marks `widows` as optional', () => {
    const result = widows<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = widows<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Widows: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      widows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = widows<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Widows: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      widows: 'a',
      [theme.breakpoints.large]: {
        widows: 'b',
      },
      [theme.breakpoints.medium]: {
        widows: 'c',
      },
      [theme.breakpoints.small]: {
        widows: 'd',
      },
    });
  });
});
