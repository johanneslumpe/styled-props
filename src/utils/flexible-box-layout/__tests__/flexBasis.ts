import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexBasis } from '../flexBasis';

describe('flexBasis', () => {
  it('should return a function', () => {
    const result = flexBasis();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexBasis` as component and css prop', () => {
    const result = flexBasis()({ flexBasis: 'inherit' });
    expect(result).toEqual({ flexBasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexBasis<'a'>()({ flexBasis: 'a' });
    expect(result).toEqual({ flexBasis: 'a' });
  });

  it('should use an interface which marks `flexBasis` as optional', () => {
    const result = flexBasis<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flexBasis<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flexBasis: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexBasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexBasis<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flexBasis: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexBasis: 'a',
      [theme.breakpoints.large]: {
        flexBasis: 'b',
      },
      [theme.breakpoints.medium]: {
        flexBasis: 'c',
      },
      [theme.breakpoints.small]: {
        flexBasis: 'd',
      },
    });
  });
});
