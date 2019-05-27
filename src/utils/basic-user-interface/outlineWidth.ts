import { OutlineWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OutlineWidthProps<T> {
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  style$OutlineWidth: T;
}

export const outlineWidth = <
  T = OutlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OutlineWidthProps<T>, Theme>> = {}) =>
  style<OutlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineWidth',
    prop: 'style$OutlineWidth',
    themeProp,
  });
