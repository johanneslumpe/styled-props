import { ScrollPaddingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingProps<T> {
  /**
   * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\* longhands.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  style$ScrollPadding: T;
}

export const scrollPadding = <
  T = ScrollPaddingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingProps<T>, Theme>> = {}) =>
  style<ScrollPaddingProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPadding',
    prop: 'style$ScrollPadding',
    themeProp,
  });
