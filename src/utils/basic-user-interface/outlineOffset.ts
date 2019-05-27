import { OutlineOffsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OutlineOffsetProps<T> {
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  style$OutlineOffset: T;
}

export const outlineOffset = <
  T = OutlineOffsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OutlineOffsetProps<T>, Theme>> = {}) =>
  style<OutlineOffsetProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineOffset',
    prop: 'style$OutlineOffset',
    themeProp,
  });
