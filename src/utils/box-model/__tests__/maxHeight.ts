import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maxHeight } from '../maxHeight';

describe('maxHeight', () => {
  it('should return a function', () => {
    const result = maxHeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maxHeight` as component and css prop', () => {
    const result = maxHeight()({ maxHeight: 'inherit' });
    expect(result).toEqual({ maxHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxHeight<'a'>()({ maxHeight: 'a' });
    expect(result).toEqual({ maxHeight: 'a' });
  });

  it('should use an interface which marks `maxHeight` as optional', () => {
    const result = maxHeight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maxHeight<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maxHeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maxHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxHeight<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maxHeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maxHeight: 'a',
      [theme.breakpoints.large]: {
        maxHeight: 'b',
      },
      [theme.breakpoints.medium]: {
        maxHeight: 'c',
      },
      [theme.breakpoints.small]: {
        maxHeight: 'd',
      },
    });
  });
});
