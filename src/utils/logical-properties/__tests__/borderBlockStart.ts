import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStart } from '../borderBlockStart';

describe('borderBlockStart', () => {
  it('should return a function', () => {
    const result = borderBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStart` as component and css prop', () => {
    const result = borderBlockStart()({ borderBlockStart: 'inherit' });
    expect(result).toEqual({ borderBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStart<'a'>()({ borderBlockStart: 'a' });
    expect(result).toEqual({ borderBlockStart: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBlockStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStart: 'a',
      [theme.breakpoints.large]: {
        borderBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStart: 'd',
      },
    });
  });
});
