import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeImageThreshold } from '../shapeImageThreshold';

describe('shapeImageThreshold', () => {
  it('should return a function', () => {
    const result = shapeImageThreshold();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeImageThreshold` as component and css prop', () => {
    const result = shapeImageThreshold()({ shapeImageThreshold: 'inherit' });
    expect(result).toEqual({ shapeImageThreshold: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeImageThreshold<'a'>()({ shapeImageThreshold: 'a' });
    expect(result).toEqual({ shapeImageThreshold: 'a' });
  });

  it('should allow using a theme', () => {
    const result = shapeImageThreshold<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ shapeImageThreshold: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeImageThreshold: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeImageThreshold<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      shapeImageThreshold: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeImageThreshold: 'a',
      [theme.breakpoints.large]: {
        shapeImageThreshold: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeImageThreshold: 'c',
      },
      [theme.breakpoints.small]: {
        shapeImageThreshold: 'd',
      },
    });
  });
});
