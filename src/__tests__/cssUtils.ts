import {
  calc,
  ch,
  cm,
  em,
  ex,
  inch,
  mm,
  pc,
  percent,
  pt,
  px,
  rem,
  vh,
  vmax,
  vmin,
  vw,
} from '../cssUtils';

describe('cssUtils', () => {
  describe('px', () => {
    it('should return a suffixed `px` value', () => {
      expect(px(100)).toBe('100px');
    });
  });

  describe('ch', () => {
    it('should return a suffixed `ch` value', () => {
      expect(ch(100)).toBe('100ch');
    });
  });

  describe('em', () => {
    it('should return a suffixed `em` value', () => {
      expect(em(100)).toBe('100em');
    });
  });

  describe('rem', () => {
    it('should return a suffixed `rem` value', () => {
      expect(rem(100)).toBe('100rem');
    });
  });

  describe('ex', () => {
    it('should return a suffixed `ex` value', () => {
      expect(ex(100)).toBe('100ex');
    });
  });

  describe('vh', () => {
    it('should return a suffixed `vh` value', () => {
      expect(vh(100)).toBe('100vh');
    });
  });

  describe('vw', () => {
    it('should return a suffixed `vw` value', () => {
      expect(vw(100)).toBe('100vw');
    });
  });

  describe('vmin', () => {
    it('should return a suffixed `vmin` value', () => {
      expect(vmin(100)).toBe('100vmin');
    });
  });

  describe('vmax', () => {
    it('should return a suffixed `vmax` value', () => {
      expect(vmax(100)).toBe('100vmax');
    });
  });

  describe('cm', () => {
    it('should return a suffixed `cm` value', () => {
      expect(cm(100)).toBe('100cm');
    });
  });

  describe('mm', () => {
    it('should return a suffixed `mm` value', () => {
      expect(mm(100)).toBe('100mm');
    });
  });

  describe('inch', () => {
    it('should return a suffixed `in` value', () => {
      expect(inch(100)).toBe('100in');
    });
  });

  describe('pc', () => {
    it('should return a suffixed `pc` value', () => {
      expect(pc(100)).toBe('100pc');
    });
  });

  describe('pt', () => {
    it('should return a suffixed `pt` value', () => {
      expect(pt(100)).toBe('100pt');
    });
  });

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
