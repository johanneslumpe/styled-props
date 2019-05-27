import { PointerEventsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PointerEventsProps<T> {
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  style$PointerEvents: T;
}

export const pointerEvents = <
  T = PointerEventsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PointerEventsProps<T>, Theme>> = {}) =>
  style<PointerEventsProps<T>, Theme, Breakpoints>({
    cssProp: 'pointerEvents',
    prop: 'style$PointerEvents',
    themeProp,
  });
