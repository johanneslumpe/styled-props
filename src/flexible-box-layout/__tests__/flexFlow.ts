import { flexFlow } from '../flexFlow';

describe('flexFlow', () => {
  it('should return a function', () => {
    const result = flexFlow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexFlow` as css and component prop', () => {
    const result = flexFlow()({ flexFlow: 'column-reverse wrap-reverse' });
    expect(result).toEqual({ flexFlow: 'column-reverse wrap-reverse' });
  });

  it('should allow using a custom value type', () => {
    const result = flexFlow<'a' | 'b'>()({ flexFlow: 'a' });
    expect(result).toEqual({ flexFlow: 'a' });
  });
});
