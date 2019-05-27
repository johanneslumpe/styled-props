import { BorderCollapsePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderCollapseProps<T> {
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  style$BorderCollapse: T;
}

export const borderCollapse = <
  T = BorderCollapsePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderCollapseProps<T>, Theme>> = {}) =>
  style<BorderCollapseProps<T>, Theme, Breakpoints>({
    cssProp: 'borderCollapse',
    prop: 'style$BorderCollapse',
    themeProp,
  });
