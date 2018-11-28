import { ObjectPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IObjectPositionProps<T> {
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition: T;
}

export const objectPosition = <
  T = ObjectPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IObjectPositionProps<T>, Theme>> = {}) =>
  style<IObjectPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'objectPosition',
    prop: 'objectPosition',
    themeProp,
  });
