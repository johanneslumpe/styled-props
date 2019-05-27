import { BorderImageOutsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageOutsetProps<T> {
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  style$BorderImageOutset: T;
}

export const borderImageOutset = <
  T = BorderImageOutsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageOutsetProps<T>, Theme>> = {}) =>
  style<BorderImageOutsetProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageOutset',
    prop: 'style$BorderImageOutset',
    themeProp,
  });
