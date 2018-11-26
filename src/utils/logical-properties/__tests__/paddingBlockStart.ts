import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingBlockStart } from '../paddingBlockStart';

describe('paddingBlockStart', () => {
  it('should return a function', () => {
    const result = paddingBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingBlockStart` as component and css prop', () => {
    const result = paddingBlockStart()({ paddingBlockStart: 'inherit' });
    expect(result).toEqual({ paddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlockStart<'a'>()({ paddingBlockStart: 'a' });
    expect(result).toEqual({ paddingBlockStart: 'a' });
  });

  it('should allow using a theme', () => {
    const result = paddingBlockStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingBlockStart: 'a',
      [theme.breakpoints.large]: {
        paddingBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        paddingBlockStart: 'd',
      },
    });
  });
});
