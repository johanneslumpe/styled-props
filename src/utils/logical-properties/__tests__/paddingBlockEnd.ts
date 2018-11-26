import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingBlockEnd } from '../paddingBlockEnd';

describe('paddingBlockEnd', () => {
  it('should return a function', () => {
    const result = paddingBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingBlockEnd` as component and css prop', () => {
    const result = paddingBlockEnd()({ paddingBlockEnd: 'inherit' });
    expect(result).toEqual({ paddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlockEnd<'a'>()({ paddingBlockEnd: 'a' });
    expect(result).toEqual({ paddingBlockEnd: 'a' });
  });

  it('should allow using a theme', () => {
    const result = paddingBlockEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingBlockEnd: 'a',
      [theme.breakpoints.large]: {
        paddingBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        paddingBlockEnd: 'd',
      },
    });
  });
});
