import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { content } from '../content';

describe('content', () => {
  it('should return a function', () => {
    const result = content();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `content` as component and css prop', () => {
    const result = content()({ content: 'inherit' });
    expect(result).toEqual({ content: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = content<'a'>()({ content: 'a' });
    expect(result).toEqual({ content: 'a' });
  });

  it('should use an interface which marks `content` as optional', () => {
    const result = content<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = content<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ content: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      content: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = content<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      content: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      content: 'a',
      [theme.breakpoints.large]: {
        content: 'b',
      },
      [theme.breakpoints.medium]: {
        content: 'c',
      },
      [theme.breakpoints.small]: {
        content: 'd',
      },
    });
  });
});
