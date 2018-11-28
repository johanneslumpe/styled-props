import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textUnderlinePosition } from '../textUnderlinePosition';

describe('textUnderlinePosition', () => {
  it('should return a function', () => {
    const result = textUnderlinePosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textUnderlinePosition` as component and css prop', () => {
    const result = textUnderlinePosition()({ textUnderlinePosition: 'inherit' });
    expect(result).toEqual({ textUnderlinePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textUnderlinePosition<'a'>()({ textUnderlinePosition: 'a' });
    expect(result).toEqual({ textUnderlinePosition: 'a' });
  });

  it('should use an interface which marks `textUnderlinePosition` as optional', () => {
    const result = textUnderlinePosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textUnderlinePosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textUnderlinePosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textUnderlinePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textUnderlinePosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textUnderlinePosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textUnderlinePosition: 'a',
      [theme.breakpoints.large]: {
        textUnderlinePosition: 'b',
      },
      [theme.breakpoints.medium]: {
        textUnderlinePosition: 'c',
      },
      [theme.breakpoints.small]: {
        textUnderlinePosition: 'd',
      },
    });
  });
});
