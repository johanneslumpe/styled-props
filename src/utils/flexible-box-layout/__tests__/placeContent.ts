import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { placeContent } from '../placeContent';

describe('placeContent', () => {
  it('should return a function', () => {
    const result = placeContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `placeContent` as component and css prop', () => {
    const result = placeContent()({ placeContent: 'inherit' });
    expect(result).toEqual({ placeContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = placeContent<'a'>()({ placeContent: 'a' });
    expect(result).toEqual({ placeContent: 'a' });
  });

  it('should allow using a theme', () => {
    const result = placeContent<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ placeContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      placeContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = placeContent<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      placeContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      placeContent: 'a',
      [theme.breakpoints.large]: {
        placeContent: 'b',
      },
      [theme.breakpoints.medium]: {
        placeContent: 'c',
      },
      [theme.breakpoints.small]: {
        placeContent: 'd',
      },
    });
  });
});
