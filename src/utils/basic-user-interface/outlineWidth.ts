import { OutlineWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineWidthProps<T> {
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth: T;
}

export const outlineWidth = <
  T = OutlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineWidthProps<T>, Theme>> = {}) =>
  style<IOutlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineWidth',
    prop: 'outlineWidth',
    themeProp,
  });
