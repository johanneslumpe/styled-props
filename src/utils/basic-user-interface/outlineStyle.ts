import { OutlineStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OutlineStyleProps<T> {
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  style$OutlineStyle: T;
}

export const outlineStyle = <
  T = OutlineStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OutlineStyleProps<T>, Theme>> = {}) =>
  style<OutlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineStyle',
    prop: 'style$OutlineStyle',
    themeProp,
  });
