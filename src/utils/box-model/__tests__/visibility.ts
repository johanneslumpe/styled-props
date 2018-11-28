import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { visibility } from '../visibility';

describe('visibility', () => {
  it('should return a function', () => {
    const result = visibility();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `visibility` as component and css prop', () => {
    const result = visibility()({ visibility: 'inherit' });
    expect(result).toEqual({ visibility: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = visibility<'a'>()({ visibility: 'a' });
    expect(result).toEqual({ visibility: 'a' });
  });

  it('should use an interface which marks `visibility` as optional', () => {
    const result = visibility<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = visibility<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ visibility: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      visibility: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = visibility<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      visibility: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      visibility: 'a',
      [theme.breakpoints.large]: {
        visibility: 'b',
      },
      [theme.breakpoints.medium]: {
        visibility: 'c',
      },
      [theme.breakpoints.small]: {
        visibility: 'd',
      },
    });
  });
});
