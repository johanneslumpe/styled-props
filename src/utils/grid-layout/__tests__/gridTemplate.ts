import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplate } from '../gridTemplate';

describe('gridTemplate', () => {
  it('should return a function', () => {
    const result = gridTemplate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplate` as component and css prop', () => {
    const result = gridTemplate()({ style$GridTemplate: 'inherit' });
    expect(result).toEqual({ gridTemplate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplate<'a'>()({ style$GridTemplate: 'a' });
    expect(result).toEqual({ gridTemplate: 'a' });
  });

  it('should use an interface which marks `gridTemplate` as optional', () => {
    const result = gridTemplate<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridTemplate<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridTemplate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplate<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridTemplate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplate: 'a',
      [theme.breakpoints.large]: {
        gridTemplate: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplate: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplate: 'd',
      },
    });
  });
});
