import { BorderImageRepeatPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageRepeatProps<T> {
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  style$BorderImageRepeat: T;
}

export const borderImageRepeat = <
  T = BorderImageRepeatPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageRepeatProps<T>, Theme>> = {}) =>
  style<BorderImageRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageRepeat',
    prop: 'style$BorderImageRepeat',
    themeProp,
  });
