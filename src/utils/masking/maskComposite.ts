import { MaskCompositeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskCompositeProps<T> {
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  style$MaskComposite: T;
}

export const maskComposite = <
  T = MaskCompositeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskCompositeProps<T>, Theme>> = {}) =>
  style<MaskCompositeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskComposite',
    prop: 'style$MaskComposite',
    themeProp,
  });
