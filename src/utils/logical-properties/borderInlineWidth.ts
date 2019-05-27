import { BorderInlineWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineWidthProps<T> {
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  style$BorderInlineWidth: T;
}

export const borderInlineWidth = <
  T = BorderInlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineWidthProps<T>, Theme>> = {}) =>
  style<BorderInlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineWidth',
    prop: 'style$BorderInlineWidth',
    themeProp,
  });
