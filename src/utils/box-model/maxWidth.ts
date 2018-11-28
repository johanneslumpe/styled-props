import { MaxWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaxWidthProps<T> {
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth: T;
}

export const maxWidth = <
  T = MaxWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaxWidthProps<T>, Theme>> = {}) =>
  style<IMaxWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'maxWidth',
    prop: 'maxWidth',
    themeProp,
  });
