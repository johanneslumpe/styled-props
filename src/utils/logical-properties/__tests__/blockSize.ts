import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { blockSize } from '../blockSize';

describe('blockSize', () => {
  it('should return a function', () => {
    const result = blockSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `blockSize` as component and css prop', () => {
    const result = blockSize()({ blockSize: 'inherit' });
    expect(result).toEqual({ blockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = blockSize<'a'>()({ blockSize: 'a' });
    expect(result).toEqual({ blockSize: 'a' });
  });

  it('should allow using a theme', () => {
    const result = blockSize<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ blockSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      blockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = blockSize<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      blockSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      blockSize: 'a',
      [theme.breakpoints.large]: {
        blockSize: 'b',
      },
      [theme.breakpoints.medium]: {
        blockSize: 'c',
      },
      [theme.breakpoints.small]: {
        blockSize: 'd',
      },
    });
  });
});
