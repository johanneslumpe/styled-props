import { BorderInlineStartWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartWidthProps<T> {
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth: T;
}

export const borderInlineStartWidth = <
  T = BorderInlineStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartWidthProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartWidth',
    prop: 'borderInlineStartWidth',
    themeProp,
  });
