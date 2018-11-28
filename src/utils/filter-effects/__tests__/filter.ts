import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { filter } from '../filter';

describe('filter', () => {
  it('should return a function', () => {
    const result = filter();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `filter` as component and css prop', () => {
    const result = filter()({ filter: 'inherit' });
    expect(result).toEqual({ filter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = filter<'a'>()({ filter: 'a' });
    expect(result).toEqual({ filter: 'a' });
  });

  it('should use an interface which marks `filter` as optional', () => {
    const result = filter<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = filter<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ filter: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      filter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = filter<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      filter: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      filter: 'a',
      [theme.breakpoints.large]: {
        filter: 'b',
      },
      [theme.breakpoints.medium]: {
        filter: 'c',
      },
      [theme.breakpoints.small]: {
        filter: 'd',
      },
    });
  });
});
