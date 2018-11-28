import { PerspectiveProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPerspectiveProps<T> {
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective: T;
}

export const perspective = <
  T = PerspectiveProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPerspectiveProps<T>, Theme>> = {}) =>
  style<IPerspectiveProps<T>, Theme, Breakpoints>({
    cssProp: 'perspective',
    prop: 'perspective',
    themeProp,
  });
