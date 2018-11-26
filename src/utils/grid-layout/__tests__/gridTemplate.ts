import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplate } from '../gridTemplate';

describe('gridTemplate', () => {
  it('should return a function', () => {
    const result = gridTemplate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplate` as component and css prop', () => {
    const result = gridTemplate()({ gridTemplate: 'inherit' });
    expect(result).toEqual({ gridTemplate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplate<'a'>()({ gridTemplate: 'a' });
    expect(result).toEqual({ gridTemplate: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridTemplate<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridTemplate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplate<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridTemplate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplate: 'a',
      [theme.breakpoints.large]: {
        gridTemplate: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplate: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplate: 'd',
      },
    });
  });
});
