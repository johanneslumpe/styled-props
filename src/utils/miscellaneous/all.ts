import { AllPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAllProps<T> {
  /**
   * The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all: T;
}

export const all = <
  T = AllPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAllProps<T>, Theme>> = {}) =>
  style<IAllProps<T>, Theme, Breakpoints>({
    cssProp: 'all',
    prop: 'all',
    themeProp,
  });
