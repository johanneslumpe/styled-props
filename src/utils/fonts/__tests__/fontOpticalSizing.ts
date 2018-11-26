import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontOpticalSizing } from '../fontOpticalSizing';

describe('fontOpticalSizing', () => {
  it('should return a function', () => {
    const result = fontOpticalSizing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontOpticalSizing` as component and css prop', () => {
    const result = fontOpticalSizing()({ fontOpticalSizing: 'inherit' });
    expect(result).toEqual({ fontOpticalSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontOpticalSizing<'a'>()({ fontOpticalSizing: 'a' });
    expect(result).toEqual({ fontOpticalSizing: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontOpticalSizing<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontOpticalSizing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontOpticalSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontOpticalSizing<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontOpticalSizing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontOpticalSizing: 'a',
      [theme.breakpoints.large]: {
        fontOpticalSizing: 'b',
      },
      [theme.breakpoints.medium]: {
        fontOpticalSizing: 'c',
      },
      [theme.breakpoints.small]: {
        fontOpticalSizing: 'd',
      },
    });
  });
});
