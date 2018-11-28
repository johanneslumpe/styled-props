import { MaskTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskTypeProps<T> {
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType: T;
}

export const maskType = <
  T = MaskTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskTypeProps<T>, Theme>> = {}) =>
  style<IMaskTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskType',
    prop: 'maskType',
    themeProp,
  });
