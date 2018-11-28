import { BorderImageRepeatPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageRepeatProps<T> {
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat: T;
}

export const borderImageRepeat = <
  T = BorderImageRepeatPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageRepeatProps<T>, Theme>> = {}) =>
  style<IBorderImageRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageRepeat',
    prop: 'borderImageRepeat',
    themeProp,
  });
