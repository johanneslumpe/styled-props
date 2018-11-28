import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { rowGap } from '../rowGap';

describe('rowGap', () => {
  it('should return a function', () => {
    const result = rowGap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `rowGap` as component and css prop', () => {
    const result = rowGap()({ rowGap: 'inherit' });
    expect(result).toEqual({ rowGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = rowGap<'a'>()({ rowGap: 'a' });
    expect(result).toEqual({ rowGap: 'a' });
  });

  it('should use an interface which marks `rowGap` as optional', () => {
    const result = rowGap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = rowGap<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ rowGap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      rowGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = rowGap<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      rowGap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      rowGap: 'a',
      [theme.breakpoints.large]: {
        rowGap: 'b',
      },
      [theme.breakpoints.medium]: {
        rowGap: 'c',
      },
      [theme.breakpoints.small]: {
        rowGap: 'd',
      },
    });
  });
});
