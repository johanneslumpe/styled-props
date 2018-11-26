import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { translate } from '../translate';

describe('translate', () => {
  it('should return a function', () => {
    const result = translate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `translate` as component and css prop', () => {
    const result = translate()({ translate: 'inherit' });
    expect(result).toEqual({ translate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = translate<'a'>()({ translate: 'a' });
    expect(result).toEqual({ translate: 'a' });
  });

  it('should allow using a theme', () => {
    const result = translate<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ translate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      translate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = translate<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      translate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      translate: 'a',
      [theme.breakpoints.large]: {
        translate: 'b',
      },
      [theme.breakpoints.medium]: {
        translate: 'c',
      },
      [theme.breakpoints.small]: {
        translate: 'd',
      },
    });
  });
});
