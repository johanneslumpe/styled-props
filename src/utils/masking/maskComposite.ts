import { MaskCompositeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskCompositeProps<T> {
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite: T;
}

export const maskComposite = <
  T = MaskCompositeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskCompositeProps<T>, Theme>> = {}) =>
  style<IMaskCompositeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskComposite',
    prop: 'maskComposite',
    themeProp,
  });
