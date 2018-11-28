import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplateAreas } from '../gridTemplateAreas';

describe('gridTemplateAreas', () => {
  it('should return a function', () => {
    const result = gridTemplateAreas();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateAreas` as component and css prop', () => {
    const result = gridTemplateAreas()({ gridTemplateAreas: 'inherit' });
    expect(result).toEqual({ gridTemplateAreas: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplateAreas<'a'>()({ gridTemplateAreas: 'a' });
    expect(result).toEqual({ gridTemplateAreas: 'a' });
  });

  it('should use an interface which marks `gridTemplateAreas` as optional', () => {
    const result = gridTemplateAreas<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridTemplateAreas<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridTemplateAreas: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplateAreas: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplateAreas<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridTemplateAreas: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplateAreas: 'a',
      [theme.breakpoints.large]: {
        gridTemplateAreas: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplateAreas: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplateAreas: 'd',
      },
    });
  });
});
