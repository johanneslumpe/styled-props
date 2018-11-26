import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeOutside } from '../shapeOutside';

describe('shapeOutside', () => {
  it('should return a function', () => {
    const result = shapeOutside();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeOutside` as component and css prop', () => {
    const result = shapeOutside()({ shapeOutside: 'inherit' });
    expect(result).toEqual({ shapeOutside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeOutside<'a'>()({ shapeOutside: 'a' });
    expect(result).toEqual({ shapeOutside: 'a' });
  });

  it('should allow using a theme', () => {
    const result = shapeOutside<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ shapeOutside: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeOutside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeOutside<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      shapeOutside: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeOutside: 'a',
      [theme.breakpoints.large]: {
        shapeOutside: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeOutside: 'c',
      },
      [theme.breakpoints.small]: {
        shapeOutside: 'd',
      },
    });
  });
});
