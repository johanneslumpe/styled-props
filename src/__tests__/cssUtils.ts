import { calc, percent } from '../cssUtils';

import { px, vw } from '../cssLengthUtils';

describe('cssUtils', () => {
  describe('percent', () => {
    it('should return a suffixed `%` value', () => {
      expect(percent(100)).toBe('100%');
    });
  });

  describe('calc', () => {
    it('should return a string combining all arguments and wrapping it within `calc()`', () => {
      expect(calc(px(100), '+', '(', px(100), '+', vw(50), ')')).toBe(
        'calc(100px + ( 100px + 50vw ))',
      );
    });
  });
});
