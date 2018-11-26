import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowWrap } from '../overflowWrap';

describe('overflowWrap', () => {
  it('should return a function', () => {
    const result = overflowWrap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowWrap` as component and css prop', () => {
    const result = overflowWrap()({ overflowWrap: 'inherit' });
    expect(result).toEqual({ overflowWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowWrap<'a'>()({ overflowWrap: 'a' });
    expect(result).toEqual({ overflowWrap: 'a' });
  });

  it('should allow using a theme', () => {
    const result = overflowWrap<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ overflowWrap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowWrap<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      overflowWrap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowWrap: 'a',
      [theme.breakpoints.large]: {
        overflowWrap: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowWrap: 'c',
      },
      [theme.breakpoints.small]: {
        overflowWrap: 'd',
      },
    });
  });
});
