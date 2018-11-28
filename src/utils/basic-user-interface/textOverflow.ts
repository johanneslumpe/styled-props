import { TextOverflowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextOverflowProps<T> {
  /**
   * The **`text-overflow`** CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`), or display a custom string.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow: T;
}

export const textOverflow = <
  T = TextOverflowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextOverflowProps<T>, Theme>> = {}) =>
  style<ITextOverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'textOverflow',
    prop: 'textOverflow',
    themeProp,
  });
