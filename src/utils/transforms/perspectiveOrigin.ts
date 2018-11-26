import { PerspectiveOriginPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPerspectiveOriginProps<T> {
  perspectiveOrigin: T;
}

export const perspectiveOrigin = <
  T = PerspectiveOriginPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPerspectiveOriginProps<T>, Theme>> = {}) =>
  style<IPerspectiveOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'perspectiveOrigin',
    prop: 'perspectiveOrigin',
    themeProp,
  });
