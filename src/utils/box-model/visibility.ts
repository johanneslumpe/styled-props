import { VisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface VisibilityProps<T> {
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  style$Visibility: T;
}

export const visibility = <
  T = VisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<VisibilityProps<T>, Theme>> = {}) =>
  style<VisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'visibility',
    prop: 'style$Visibility',
    themeProp,
  });
