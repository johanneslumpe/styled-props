import { flexDirection } from '../flexDirection';

describe('flexDirection', () => {
  it('should return a function', () => {
    const result = flexDirection();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexDirection` as css and component prop', () => {
    const result = flexDirection()({ flexDirection: 'column-reverse' });
    expect(result).toEqual({ flexDirection: 'column-reverse' });
  });

  it('should allow using a custom value type', () => {
    const result = flexDirection<'a' | 'b'>()({ flexDirection: 'a' });
    expect(result).toEqual({ flexDirection: 'a' });
  });
});
