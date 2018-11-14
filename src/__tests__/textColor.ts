import { textColor } from '../textColor';
import { IBreakpoints, IColors, ITheme, theme } from './utils/theme';

describe('textColor', () => {
  it('should return a function', () => {
    const result = textColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should have sensible defaults', () => {
    const result = textColor()({ textColor: 'red' });
    expect(result).toEqual({ color: 'red' });
  });

  it('should allow using a custom value type, a theme and breakpoints', () => {
    const result = textColor<keyof IColors, ITheme, IBreakpoints>({
      themeProp: 'colors',
    })({ textColor: 'green', theme });
    expect(result).toEqual({ color: theme.colors.green });
  });
});
