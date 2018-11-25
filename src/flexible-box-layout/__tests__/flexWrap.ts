import { flexWrap } from '../flexWrap';

describe('flexWrap', () => {
  it('should return a function', () => {
    const result = flexWrap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexWrap` as css and component prop', () => {
    const result = flexWrap()({ flexWrap: 'wrap-reverse' });
    expect(result).toEqual({ flexWrap: 'wrap-reverse' });
  });

  it('should allow using a custom value type', () => {
    const result = flexWrap<'a' | 'b'>()({ flexWrap: 'a' });
    expect(result).toEqual({ flexWrap: 'a' });
  });
});
