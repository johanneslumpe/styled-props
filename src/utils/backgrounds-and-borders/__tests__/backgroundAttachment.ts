import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundAttachment } from '../backgroundAttachment';

describe('backgroundAttachment', () => {
  it('should return a function', () => {
    const result = backgroundAttachment();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundAttachment` as component and css prop', () => {
    const result = backgroundAttachment()({ backgroundAttachment: 'inherit' });
    expect(result).toEqual({ backgroundAttachment: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundAttachment<'a'>()({ backgroundAttachment: 'a' });
    expect(result).toEqual({ backgroundAttachment: 'a' });
  });

  it('should allow using a theme', () => {
    const result = backgroundAttachment<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ backgroundAttachment: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundAttachment: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundAttachment<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      backgroundAttachment: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundAttachment: 'a',
      [theme.breakpoints.large]: {
        backgroundAttachment: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundAttachment: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundAttachment: 'd',
      },
    });
  });
});
