import { flex } from '../flex';

describe('flex', () => {
  it('should return a function', () => {
    const result = flex();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flex` as css and component prop', () => {
    const result = flex()({ flex: 'auto' });
    expect(result).toEqual({ flex: 'auto' });
  });

  it('should allow using a custom value type', () => {
    const result = flex<'a' | 'b'>()({ flex: 'a' });
    expect(result).toEqual({ flex: 'a' });
  });
});
