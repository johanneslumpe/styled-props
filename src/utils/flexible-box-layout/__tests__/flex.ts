import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flex } from '../flex';

describe('flex', () => {
  it('should return a function', () => {
    const result = flex();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flex` as component and css prop', () => {
    const result = flex()({ flex: 'inherit' });
    expect(result).toEqual({ flex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flex<'a'>()({ flex: 'a' });
    expect(result).toEqual({ flex: 'a' });
  });

  it('should allow using a theme', () => {
    const result = flex<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flex: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flex<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flex: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flex: 'a',
      [theme.breakpoints.large]: {
        flex: 'b',
      },
      [theme.breakpoints.medium]: {
        flex: 'c',
      },
      [theme.breakpoints.small]: {
        flex: 'd',
      },
    });
  });
});
