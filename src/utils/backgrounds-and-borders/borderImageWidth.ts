import { BorderImageWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageWidthProps<T> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth: T;
}

export const borderImageWidth = <
  T = BorderImageWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageWidthProps<T>, Theme>> = {}) =>
  style<IBorderImageWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageWidth',
    prop: 'borderImageWidth',
    themeProp,
  });
