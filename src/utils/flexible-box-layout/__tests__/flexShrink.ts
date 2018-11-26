import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexShrink } from '../flexShrink';

describe('flexShrink', () => {
  it('should return a function', () => {
    const result = flexShrink();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexShrink` as component and css prop', () => {
    const result = flexShrink()({ flexShrink: 'inherit' });
    expect(result).toEqual({ flexShrink: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexShrink<'a'>()({ flexShrink: 'a' });
    expect(result).toEqual({ flexShrink: 'a' });
  });

  it('should allow using a theme', () => {
    const result = flexShrink<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flexShrink: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexShrink: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexShrink<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flexShrink: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexShrink: 'a',
      [theme.breakpoints.large]: {
        flexShrink: 'b',
      },
      [theme.breakpoints.medium]: {
        flexShrink: 'c',
      },
      [theme.breakpoints.small]: {
        flexShrink: 'd',
      },
    });
  });
});
