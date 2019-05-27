import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridRowStart } from '../gridRowStart';

describe('gridRowStart', () => {
  it('should return a function', () => {
    const result = gridRowStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridRowStart` as component and css prop', () => {
    const result = gridRowStart()({ style$GridRowStart: 'inherit' });
    expect(result).toEqual({ gridRowStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRowStart<'a'>()({ style$GridRowStart: 'a' });
    expect(result).toEqual({ gridRowStart: 'a' });
  });

  it('should use an interface which marks `gridRowStart` as optional', () => {
    const result = gridRowStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridRowStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridRowStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridRowStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRowStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridRowStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridRowStart: 'a',
      [theme.breakpoints.large]: {
        gridRowStart: 'b',
      },
      [theme.breakpoints.medium]: {
        gridRowStart: 'c',
      },
      [theme.breakpoints.small]: {
        gridRowStart: 'd',
      },
    });
  });
});
