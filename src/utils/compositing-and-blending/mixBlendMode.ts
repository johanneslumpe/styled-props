import { MixBlendModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMixBlendModeProps<T> {
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode: T;
}

export const mixBlendMode = <
  T = MixBlendModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMixBlendModeProps<T>, Theme>> = {}) =>
  style<IMixBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'mixBlendMode',
    prop: 'mixBlendMode',
    themeProp,
  });
