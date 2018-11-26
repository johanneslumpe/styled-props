import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { verticalAlign } from '../verticalAlign';

describe('verticalAlign', () => {
  it('should return a function', () => {
    const result = verticalAlign();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `verticalAlign` as component and css prop', () => {
    const result = verticalAlign()({ verticalAlign: 'inherit' });
    expect(result).toEqual({ verticalAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = verticalAlign<'a'>()({ verticalAlign: 'a' });
    expect(result).toEqual({ verticalAlign: 'a' });
  });

  it('should allow using a theme', () => {
    const result = verticalAlign<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ verticalAlign: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      verticalAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = verticalAlign<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      verticalAlign: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      verticalAlign: 'a',
      [theme.breakpoints.large]: {
        verticalAlign: 'b',
      },
      [theme.breakpoints.medium]: {
        verticalAlign: 'c',
      },
      [theme.breakpoints.small]: {
        verticalAlign: 'd',
      },
    });
  });
});
