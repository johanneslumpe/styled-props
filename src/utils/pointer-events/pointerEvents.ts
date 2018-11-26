import { PointerEventsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPointerEventsProps<T> {
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
