import { OutlineStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineStyleProps<T> {
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle: T;
}

export const outlineStyle = <
  T = OutlineStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineStyleProps<T>, Theme>> = {}) =>
  style<IOutlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineStyle',
    prop: 'outlineStyle',
    themeProp,
  });
