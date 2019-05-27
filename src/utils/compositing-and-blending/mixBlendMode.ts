import { MixBlendModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MixBlendModeProps<T> {
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  style$MixBlendMode: T;
}

export const mixBlendMode = <
  T = MixBlendModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MixBlendModeProps<T>, Theme>> = {}) =>
  style<MixBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'mixBlendMode',
    prop: 'style$MixBlendMode',
    themeProp,
  });
