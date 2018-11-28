import { ScrollSnapTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScrollSnapTypeProps<T> {
  /**
   * The **`scroll-snap-type`** CSS property defines how strictly snap points are enforced on the scroll container in case there is one.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType: T;
}

export const scrollSnapType = <
  T = ScrollSnapTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScrollSnapTypeProps<T>, Theme>> = {}) =>
  style<IScrollSnapTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollSnapType',
    prop: 'scrollSnapType',
    themeProp,
  });
