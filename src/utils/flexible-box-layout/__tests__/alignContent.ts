import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { alignContent } from '../alignContent';

describe('alignContent', () => {
  it('should return a function', () => {
    const result = alignContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `alignContent` as component and css prop', () => {
    const result = alignContent()({ alignContent: 'inherit' });
    expect(result).toEqual({ alignContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignContent<'a'>()({ alignContent: 'a' });
    expect(result).toEqual({ alignContent: 'a' });
  });

  it('should allow using a theme', () => {
    const result = alignContent<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ alignContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      alignContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignContent<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      alignContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      alignContent: 'a',
      [theme.breakpoints.large]: {
        alignContent: 'b',
      },
      [theme.breakpoints.medium]: {
        alignContent: 'c',
      },
      [theme.breakpoints.small]: {
        alignContent: 'd',
      },
    });
  });
});
