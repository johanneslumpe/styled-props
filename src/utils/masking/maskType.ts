import { MaskTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskTypeProps<T> {
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  style$MaskType: T;
}

export const maskType = <
  T = MaskTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskTypeProps<T>, Theme>> = {}) =>
  style<MaskTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskType',
    prop: 'style$MaskType',
    themeProp,
  });
