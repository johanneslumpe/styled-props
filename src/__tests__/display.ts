import { display } from '../display';
import { IBreakpoints, IColors, ITheme, theme } from './utils/theme';

describe('textColor', () => {
  it('should return a function', () => {
    const result = display();
    expect(result).toBeInstanceOf(Function);
  });

  it('should have sensible defaults', () => {
    const result = display()({ display: 'block' });
    expect(result).toEqual({ display: 'block' });
  });

  it('should allow using a custom value type', () => {
    const result = display<'a' | 'b'>()({ display: 'a' });
    expect(result).toEqual({ display: 'a' });
  });
});
