import { PointerEventsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPointerEventsProps<T> {
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of mouse events.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents: T;
}

export const pointerEvents = <
  T = PointerEventsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPointerEventsProps<T>, Theme>> = {}) =>
  style<IPointerEventsProps<T>, Theme, Breakpoints>({
    cssProp: 'pointerEvents',
    prop: 'pointerEvents',
    themeProp,
  });
