import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { border } from '../border';

describe('border', () => {
  it('should return a function', () => {
    const result = border();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `border` as component and css prop', () => {
    const result = border()({ border: 'inherit' });
    expect(result).toEqual({ border: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = border<'a'>()({ border: 'a' });
    expect(result).toEqual({ border: 'a' });
  });

  it('should use an interface which marks `border` as optional', () => {
    const result = border<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = border<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ border: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      border: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = border<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      border: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      border: 'a',
      [theme.breakpoints.large]: {
        border: 'b',
      },
      [theme.breakpoints.medium]: {
        border: 'c',
      },
      [theme.breakpoints.small]: {
        border: 'd',
      },
    });
  });
});
