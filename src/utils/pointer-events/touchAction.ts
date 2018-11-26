import { TouchActionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITouchActionProps<T> {
  touchAction: T;
}

export const touchAction = <
  T = TouchActionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITouchActionProps<T>, Theme>> = {}) =>
  style<ITouchActionProps<T>, Theme, Breakpoints>({
    cssProp: 'touchAction',
    prop: 'touchAction',
    themeProp,
  });
