import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { bottom } from '../bottom';

describe('bottom', () => {
  it('should return a function', () => {
    const result = bottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `bottom` as component and css prop', () => {
    const result = bottom()({ bottom: 'inherit' });
    expect(result).toEqual({ bottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = bottom<'a'>()({ bottom: 'a' });
    expect(result).toEqual({ bottom: 'a' });
  });

  it('should use an interface which marks `bottom` as optional', () => {
    const result = bottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = bottom<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ bottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      bottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = bottom<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      bottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      bottom: 'a',
      [theme.breakpoints.large]: {
        bottom: 'b',
      },
      [theme.breakpoints.medium]: {
        bottom: 'c',
      },
      [theme.breakpoints.small]: {
        bottom: 'd',
      },
    });
  });
});
