import { flexGrow } from '../flexGrow';

describe('flexGrow', () => {
  it('should return a function', () => {
    const result = flexGrow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexGrow` as css and component prop', () => {
    const result = flexGrow()({ flexGrow: 100 });
    expect(result).toEqual({ flexGrow: 100 });
  });

  it('should allow using a custom value type', () => {
    const result = flexGrow<'a' | 'b'>()({ flexGrow: 'a' });
    expect(result).toEqual({ flexGrow: 'a' });
  });
});
