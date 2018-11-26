import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { boxDecorationBreak } from '../boxDecorationBreak';

describe('boxDecorationBreak', () => {
  it('should return a function', () => {
    const result = boxDecorationBreak();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `boxDecorationBreak` as component and css prop', () => {
    const result = boxDecorationBreak()({ boxDecorationBreak: 'inherit' });
    expect(result).toEqual({ boxDecorationBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxDecorationBreak<'a'>()({ boxDecorationBreak: 'a' });
    expect(result).toEqual({ boxDecorationBreak: 'a' });
  });

  it('should allow using a theme', () => {
    const result = boxDecorationBreak<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ boxDecorationBreak: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      boxDecorationBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxDecorationBreak<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      boxDecorationBreak: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      boxDecorationBreak: 'a',
      [theme.breakpoints.large]: {
        boxDecorationBreak: 'b',
      },
      [theme.breakpoints.medium]: {
        boxDecorationBreak: 'c',
      },
      [theme.breakpoints.small]: {
        boxDecorationBreak: 'd',
      },
    });
  });
});
