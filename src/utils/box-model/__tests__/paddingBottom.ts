import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingBottom } from '../paddingBottom';

describe('paddingBottom', () => {
  it('should return a function', () => {
    const result = paddingBottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingBottom` as component and css prop', () => {
    const result = paddingBottom()({ paddingBottom: 'inherit' });
    expect(result).toEqual({ paddingBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBottom<'a'>()({ paddingBottom: 'a' });
    expect(result).toEqual({ paddingBottom: 'a' });
  });

  it('should use an interface which marks `paddingBottom` as optional', () => {
    const result = paddingBottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingBottom<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingBottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBottom<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingBottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingBottom: 'a',
      [theme.breakpoints.large]: {
        paddingBottom: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingBottom: 'c',
      },
      [theme.breakpoints.small]: {
        paddingBottom: 'd',
      },
    });
  });
});
