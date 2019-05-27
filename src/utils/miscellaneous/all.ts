import { AllPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AllProps<T> {
  /**
   * The `**all**` shorthand CSS property resets all of an element's properties (except `unicode-bidi` and `direction`). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  style$All: T;
}

export const all = <
  T = AllPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AllProps<T>, Theme>> = {}) =>
  style<AllProps<T>, Theme, Breakpoints>({
    cssProp: 'all',
    prop: 'style$All',
    themeProp,
  });
