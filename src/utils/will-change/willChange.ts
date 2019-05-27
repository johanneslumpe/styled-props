import { WillChangeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WillChangeProps<T> {
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  style$WillChange: T;
}

export const willChange = <
  T = WillChangeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WillChangeProps<T>, Theme>> = {}) =>
  style<WillChangeProps<T>, Theme, Breakpoints>({
    cssProp: 'willChange',
    prop: 'style$WillChange',
    themeProp,
  });
