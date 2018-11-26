import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { orphans } from '../orphans';

describe('orphans', () => {
  it('should return a function', () => {
    const result = orphans();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `orphans` as component and css prop', () => {
    const result = orphans()({ orphans: 'inherit' });
    expect(result).toEqual({ orphans: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = orphans<'a'>()({ orphans: 'a' });
    expect(result).toEqual({ orphans: 'a' });
  });

  it('should allow using a theme', () => {
    const result = orphans<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ orphans: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      orphans: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = orphans<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      orphans: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      orphans: 'a',
      [theme.breakpoints.large]: {
        orphans: 'b',
      },
      [theme.breakpoints.medium]: {
        orphans: 'c',
      },
      [theme.breakpoints.small]: {
        orphans: 'd',
      },
    });
  });
});
