import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { mask } from '../mask';

describe('mask', () => {
  it('should return a function', () => {
    const result = mask();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `mask` as component and css prop', () => {
    const result = mask()({ mask: 'inherit' });
    expect(result).toEqual({ mask: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = mask<'a'>()({ mask: 'a' });
    expect(result).toEqual({ mask: 'a' });
  });

  it('should use an interface which marks `mask` as optional', () => {
    const result = mask<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = mask<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ mask: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      mask: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = mask<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      mask: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      mask: 'a',
      [theme.breakpoints.large]: {
        mask: 'b',
      },
      [theme.breakpoints.medium]: {
        mask: 'c',
      },
      [theme.breakpoints.small]: {
        mask: 'd',
      },
    });
  });
});
