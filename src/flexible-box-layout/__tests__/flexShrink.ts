import { flexShrink } from '../flexShrink';

describe('flexShrink', () => {
  it('should return a function', () => {
    const result = flexShrink();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexShrink` as css and component prop', () => {
    const result = flexShrink()({ flexShrink: 100 });
    expect(result).toEqual({ flexShrink: 100 });
  });

  it('should allow using a custom value type', () => {
    const result = flexShrink<'a' | 'b'>()({ flexShrink: 'a' });
    expect(result).toEqual({ flexShrink: 'a' });
  });
});
