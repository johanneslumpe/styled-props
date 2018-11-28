import { OutlineOffsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineOffsetProps<T> {
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset: T;
}

export const outlineOffset = <
  T = OutlineOffsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineOffsetProps<T>, Theme>> = {}) =>
  style<IOutlineOffsetProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineOffset',
    prop: 'outlineOffset',
    themeProp,
  });
