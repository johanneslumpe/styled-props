import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariant } from '../fontVariant';

describe('fontVariant', () => {
  it('should return a function', () => {
    const result = fontVariant();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariant` as component and css prop', () => {
    const result = fontVariant()({ fontVariant: 'inherit' });
    expect(result).toEqual({ fontVariant: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariant<'a'>()({ fontVariant: 'a' });
    expect(result).toEqual({ fontVariant: 'a' });
  });

  it('should use an interface which marks `fontVariant` as optional', () => {
    const result = fontVariant<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariant<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariant: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariant: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariant<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariant: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariant: 'a',
      [theme.breakpoints.large]: {
        fontVariant: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariant: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariant: 'd',
      },
    });
  });
});
