import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flex } from '../flex';

describe('flex', () => {
  it('should return a function', () => {
    const result = flex();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flex` as component and css prop', () => {
    const result = flex()({ style$Flex: 'inherit' });
    expect(result).toEqual({ flex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flex<'a'>()({ style$Flex: 'a' });
    expect(result).toEqual({ flex: 'a' });
  });

  it('should use an interface which marks `flex` as optional', () => {
    const result = flex<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flex<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Flex: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flex<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Flex: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flex: 'a',
      [theme.breakpoints.large]: {
        flex: 'b',
      },
      [theme.breakpoints.medium]: {
        flex: 'c',
      },
      [theme.breakpoints.small]: {
        flex: 'd',
      },
    });
  });
});
