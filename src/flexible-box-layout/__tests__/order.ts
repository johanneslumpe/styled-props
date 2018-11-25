import { order } from '../order';

describe('order', () => {
  it('should return a function', () => {
    const result = order();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `order` as css and component prop', () => {
    const result = order()({ order: 1 });
    expect(result).toEqual({ order: 1 });
  });

  it('should allow using a custom value type', () => {
    const result = order<'a' | 'b'>()({ order: 'a' });
    expect(result).toEqual({ order: 'a' });
  });
});
