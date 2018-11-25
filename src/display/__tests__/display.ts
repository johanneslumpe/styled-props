import { display } from '../display';

describe('display', () => {
  it('should return a function', () => {
    const result = display();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `display` as css and component prop', () => {
    const result = display()({ display: 'block' });
    expect(result).toEqual({ display: 'block' });
  });

  it('should allow using a custom value type', () => {
    const result = display<'a' | 'b'>()({ display: 'a' });
    expect(result).toEqual({ display: 'a' });
  });
});
