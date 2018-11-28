import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridAutoFlow } from '../gridAutoFlow';

describe('gridAutoFlow', () => {
  it('should return a function', () => {
    const result = gridAutoFlow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridAutoFlow` as component and css prop', () => {
    const result = gridAutoFlow()({ gridAutoFlow: 'inherit' });
    expect(result).toEqual({ gridAutoFlow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoFlow<'a'>()({ gridAutoFlow: 'a' });
    expect(result).toEqual({ gridAutoFlow: 'a' });
  });

  it('should use an interface which marks `gridAutoFlow` as optional', () => {
    const result = gridAutoFlow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridAutoFlow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridAutoFlow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridAutoFlow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoFlow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridAutoFlow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridAutoFlow: 'a',
      [theme.breakpoints.large]: {
        gridAutoFlow: 'b',
      },
      [theme.breakpoints.medium]: {
        gridAutoFlow: 'c',
      },
      [theme.breakpoints.small]: {
        gridAutoFlow: 'd',
      },
    });
  });
});
