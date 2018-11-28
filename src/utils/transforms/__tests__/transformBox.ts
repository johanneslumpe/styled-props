import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transformBox } from '../transformBox';

describe('transformBox', () => {
  it('should return a function', () => {
    const result = transformBox();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transformBox` as component and css prop', () => {
    const result = transformBox()({ transformBox: 'inherit' });
    expect(result).toEqual({ transformBox: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformBox<'a'>()({ transformBox: 'a' });
    expect(result).toEqual({ transformBox: 'a' });
  });

  it('should use an interface which marks `transformBox` as optional', () => {
    const result = transformBox<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transformBox<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transformBox: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transformBox: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformBox<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transformBox: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transformBox: 'a',
      [theme.breakpoints.large]: {
        transformBox: 'b',
      },
      [theme.breakpoints.medium]: {
        transformBox: 'c',
      },
      [theme.breakpoints.small]: {
        transformBox: 'd',
      },
    });
  });
});
