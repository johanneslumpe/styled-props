import { VisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IVisibilityProps<T> {
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility: T;
}

export const visibility = <
  T = VisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IVisibilityProps<T>, Theme>> = {}) =>
  style<IVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'visibility',
    prop: 'visibility',
    themeProp,
  });
