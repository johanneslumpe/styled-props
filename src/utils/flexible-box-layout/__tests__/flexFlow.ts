import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexFlow } from '../flexFlow';

describe('flexFlow', () => {
  it('should return a function', () => {
    const result = flexFlow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexFlow` as component and css prop', () => {
    const result = flexFlow()({ flexFlow: 'inherit' });
    expect(result).toEqual({ flexFlow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexFlow<'a'>()({ flexFlow: 'a' });
    expect(result).toEqual({ flexFlow: 'a' });
  });

  it('should allow using a theme', () => {
    const result = flexFlow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flexFlow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexFlow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexFlow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flexFlow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexFlow: 'a',
      [theme.breakpoints.large]: {
        flexFlow: 'b',
      },
      [theme.breakpoints.medium]: {
        flexFlow: 'c',
      },
      [theme.breakpoints.small]: {
        flexFlow: 'd',
      },
    });
  });
});
