import { ObjectPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ObjectPositionProps<T> {
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  style$ObjectPosition: T;
}

export const objectPosition = <
  T = ObjectPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ObjectPositionProps<T>, Theme>> = {}) =>
  style<ObjectPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'objectPosition',
    prop: 'style$ObjectPosition',
    themeProp,
  });
