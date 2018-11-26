import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexGrow } from '../flexGrow';

describe('flexGrow', () => {
  it('should return a function', () => {
    const result = flexGrow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexGrow` as component and css prop', () => {
    const result = flexGrow()({ flexGrow: 'inherit' });
    expect(result).toEqual({ flexGrow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexGrow<'a'>()({ flexGrow: 'a' });
    expect(result).toEqual({ flexGrow: 'a' });
  });

  it('should allow using a theme', () => {
    const result = flexGrow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flexGrow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexGrow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexGrow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flexGrow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexGrow: 'a',
      [theme.breakpoints.large]: {
        flexGrow: 'b',
      },
      [theme.breakpoints.medium]: {
        flexGrow: 'c',
      },
      [theme.breakpoints.small]: {
        flexGrow: 'd',
      },
    });
  });
});
