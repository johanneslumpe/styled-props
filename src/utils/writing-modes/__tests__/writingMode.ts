import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { writingMode } from '../writingMode';

describe('writingMode', () => {
  it('should return a function', () => {
    const result = writingMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `writingMode` as component and css prop', () => {
    const result = writingMode()({ writingMode: 'inherit' });
    expect(result).toEqual({ writingMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = writingMode<'a'>()({ writingMode: 'a' });
    expect(result).toEqual({ writingMode: 'a' });
  });

  it('should allow using a theme', () => {
    const result = writingMode<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ writingMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      writingMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = writingMode<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      writingMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      writingMode: 'a',
      [theme.breakpoints.large]: {
        writingMode: 'b',
      },
      [theme.breakpoints.medium]: {
        writingMode: 'c',
      },
      [theme.breakpoints.small]: {
        writingMode: 'd',
      },
    });
  });
});
