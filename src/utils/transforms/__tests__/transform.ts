import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transform } from '../transform';

describe('transform', () => {
  it('should return a function', () => {
    const result = transform();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transform` as component and css prop', () => {
    const result = transform()({ transform: 'inherit' });
    expect(result).toEqual({ transform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transform<'a'>()({ transform: 'a' });
    expect(result).toEqual({ transform: 'a' });
  });

  it('should allow using a theme', () => {
    const result = transform<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transform: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transform<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transform: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transform: 'a',
      [theme.breakpoints.large]: {
        transform: 'b',
      },
      [theme.breakpoints.medium]: {
        transform: 'c',
      },
      [theme.breakpoints.small]: {
        transform: 'd',
      },
    });
  });
});
