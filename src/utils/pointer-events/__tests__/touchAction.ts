import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { touchAction } from '../touchAction';

describe('touchAction', () => {
  it('should return a function', () => {
    const result = touchAction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `touchAction` as component and css prop', () => {
    const result = touchAction()({ touchAction: 'inherit' });
    expect(result).toEqual({ touchAction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = touchAction<'a'>()({ touchAction: 'a' });
    expect(result).toEqual({ touchAction: 'a' });
  });

  it('should allow using a theme', () => {
    const result = touchAction<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ touchAction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      touchAction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = touchAction<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      touchAction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      touchAction: 'a',
      [theme.breakpoints.large]: {
        touchAction: 'b',
      },
      [theme.breakpoints.medium]: {
        touchAction: 'c',
      },
      [theme.breakpoints.small]: {
        touchAction: 'd',
      },
    });
  });
});
