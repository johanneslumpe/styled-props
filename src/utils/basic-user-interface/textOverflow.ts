import { TextOverflowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextOverflowProps<T> {
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  style$TextOverflow: T;
}

export const textOverflow = <
  T = TextOverflowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextOverflowProps<T>, Theme>> = {}) =>
  style<TextOverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'textOverflow',
    prop: 'style$TextOverflow',
    themeProp,
  });
