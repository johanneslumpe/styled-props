import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEnd } from '../borderBlockEnd';

describe('borderBlockEnd', () => {
  it('should return a function', () => {
    const result = borderBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEnd` as component and css prop', () => {
    const result = borderBlockEnd()({ borderBlockEnd: 'inherit' });
    expect(result).toEqual({ borderBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEnd<'a'>()({ borderBlockEnd: 'a' });
    expect(result).toEqual({ borderBlockEnd: 'a' });
  });

  it('should use an interface which marks `borderBlockEnd` as optional', () => {
    const result = borderBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEnd: 'a',
      [theme.breakpoints.large]: {
        borderBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEnd: 'd',
      },
    });
  });
});
