import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textOverflow } from '../textOverflow';

describe('textOverflow', () => {
  it('should return a function', () => {
    const result = textOverflow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textOverflow` as component and css prop', () => {
    const result = textOverflow()({ textOverflow: 'inherit' });
    expect(result).toEqual({ textOverflow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textOverflow<'a'>()({ textOverflow: 'a' });
    expect(result).toEqual({ textOverflow: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textOverflow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textOverflow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textOverflow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textOverflow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textOverflow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textOverflow: 'a',
      [theme.breakpoints.large]: {
        textOverflow: 'b',
      },
      [theme.breakpoints.medium]: {
        textOverflow: 'c',
      },
      [theme.breakpoints.small]: {
        textOverflow: 'd',
      },
    });
  });
});
