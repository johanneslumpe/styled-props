import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridAutoFlow } from '../gridAutoFlow';

describe('gridAutoFlow', () => {
  it('should return a function', () => {
    const result = gridAutoFlow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridAutoFlow` as component and css prop', () => {
    const result = gridAutoFlow()({ style$GridAutoFlow: 'inherit' });
    expect(result).toEqual({ gridAutoFlow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoFlow<'a'>()({ style$GridAutoFlow: 'a' });
    expect(result).toEqual({ gridAutoFlow: 'a' });
  });

  it('should use an interface which marks `gridAutoFlow` as optional', () => {
    const result = gridAutoFlow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridAutoFlow<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridAutoFlow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridAutoFlow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoFlow<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridAutoFlow: {
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
