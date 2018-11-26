import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineWidth } from '../outlineWidth';

describe('outlineWidth', () => {
  it('should return a function', () => {
    const result = outlineWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineWidth` as component and css prop', () => {
    const result = outlineWidth()({ outlineWidth: 'inherit' });
    expect(result).toEqual({ outlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineWidth<'a'>()({ outlineWidth: 'a' });
    expect(result).toEqual({ outlineWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = outlineWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ outlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      outlineWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineWidth: 'a',
      [theme.breakpoints.large]: {
        outlineWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineWidth: 'c',
      },
      [theme.breakpoints.small]: {
        outlineWidth: 'd',
      },
    });
  });
});