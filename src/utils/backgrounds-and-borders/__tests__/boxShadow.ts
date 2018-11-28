import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { boxShadow } from '../boxShadow';

describe('boxShadow', () => {
  it('should return a function', () => {
    const result = boxShadow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `boxShadow` as component and css prop', () => {
    const result = boxShadow()({ boxShadow: 'inherit' });
    expect(result).toEqual({ boxShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxShadow<'a'>()({ boxShadow: 'a' });
    expect(result).toEqual({ boxShadow: 'a' });
  });

  it('should use an interface which marks `boxShadow` as optional', () => {
    const result = boxShadow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = boxShadow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ boxShadow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      boxShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxShadow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      boxShadow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      boxShadow: 'a',
      [theme.breakpoints.large]: {
        boxShadow: 'b',
      },
      [theme.breakpoints.medium]: {
        boxShadow: 'c',
      },
      [theme.breakpoints.small]: {
        boxShadow: 'd',
      },
    });
  });
});
