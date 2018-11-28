import { BorderInlineStartStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartStyleProps<T> {
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle: T;
}

export const borderInlineStartStyle = <
  T = BorderInlineStartStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartStyleProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartStyle',
    prop: 'borderInlineStartStyle',
    themeProp,
  });
