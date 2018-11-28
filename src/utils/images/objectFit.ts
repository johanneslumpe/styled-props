import { ObjectFitPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IObjectFitProps<T> {
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit: T;
}

export const objectFit = <
  T = ObjectFitPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IObjectFitProps<T>, Theme>> = {}) =>
  style<IObjectFitProps<T>, Theme, Breakpoints>({
    cssProp: 'objectFit',
    prop: 'objectFit',
    themeProp,
  });
