import { ObjectFitPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ObjectFitProps<T> {
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  style$ObjectFit: T;
}

export const objectFit = <
  T = ObjectFitPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ObjectFitProps<T>, Theme>> = {}) =>
  style<ObjectFitProps<T>, Theme, Breakpoints>({
    cssProp: 'objectFit',
    prop: 'style$ObjectFit',
    themeProp,
  });
