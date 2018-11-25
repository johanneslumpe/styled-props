import { flexBasis } from '../flexBasis';

describe('flexBasis', () => {
  it('should return a function', () => {
    const result = flexBasis();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexBasis` as css and component prop', () => {
    const result = flexBasis()({ flexBasis: 'auto' });
    expect(result).toEqual({ flexBasis: 'auto' });
  });

  it('should allow using a custom value type', () => {
    const result = flexBasis<'a' | 'b'>()({ flexBasis: 'a' });
    expect(result).toEqual({ flexBasis: 'a' });
  });
});
