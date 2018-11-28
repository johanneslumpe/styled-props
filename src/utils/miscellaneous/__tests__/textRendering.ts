import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textRendering } from '../textRendering';

describe('textRendering', () => {
  it('should return a function', () => {
    const result = textRendering();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textRendering` as component and css prop', () => {
    const result = textRendering()({ textRendering: 'inherit' });
    expect(result).toEqual({ textRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textRendering<'a'>()({ textRendering: 'a' });
    expect(result).toEqual({ textRendering: 'a' });
  });

  it('should use an interface which marks `textRendering` as optional', () => {
    const result = textRendering<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textRendering<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textRendering: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textRendering<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textRendering: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textRendering: 'a',
      [theme.breakpoints.large]: {
        textRendering: 'b',
      },
      [theme.breakpoints.medium]: {
        textRendering: 'c',
      },
      [theme.breakpoints.small]: {
        textRendering: 'd',
      },
    });
  });
});
