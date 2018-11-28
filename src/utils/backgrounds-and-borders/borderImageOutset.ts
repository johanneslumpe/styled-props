import { BorderImageOutsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageOutsetProps<T> {
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset: T;
}

export const borderImageOutset = <
  T = BorderImageOutsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageOutsetProps<T>, Theme>> = {}) =>
  style<IBorderImageOutsetProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageOutset',
    prop: 'borderImageOutset',
    themeProp,
  });
