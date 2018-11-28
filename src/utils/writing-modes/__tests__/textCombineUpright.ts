import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textCombineUpright } from '../textCombineUpright';

describe('textCombineUpright', () => {
  it('should return a function', () => {
    const result = textCombineUpright();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textCombineUpright` as component and css prop', () => {
    const result = textCombineUpright()({ textCombineUpright: 'inherit' });
    expect(result).toEqual({ textCombineUpright: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textCombineUpright<'a'>()({ textCombineUpright: 'a' });
    expect(result).toEqual({ textCombineUpright: 'a' });
  });

  it('should use an interface which marks `textCombineUpright` as optional', () => {
    const result = textCombineUpright<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textCombineUpright<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textCombineUpright: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textCombineUpright: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textCombineUpright<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textCombineUpright: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textCombineUpright: 'a',
      [theme.breakpoints.large]: {
        textCombineUpright: 'b',
      },
      [theme.breakpoints.medium]: {
        textCombineUpright: 'c',
      },
      [theme.breakpoints.small]: {
        textCombineUpright: 'd',
      },
    });
  });
});
