import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundColor } from '../backgroundColor';

describe('backgroundColor', () => {
  it('should return a function', () => {
    const result = backgroundColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundColor` as component and css prop', () => {
    const result = backgroundColor()({ backgroundColor: 'inherit' });
    expect(result).toEqual({ backgroundColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundColor<'a'>()({ backgroundColor: 'a' });
    expect(result).toEqual({ backgroundColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = backgroundColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ backgroundColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      backgroundColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundColor: 'a',
      [theme.breakpoints.large]: {
        backgroundColor: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundColor: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundColor: 'd',
      },
    });
  });
});
