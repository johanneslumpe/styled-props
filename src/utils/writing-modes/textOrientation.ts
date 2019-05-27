import { TextOrientationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextOrientationProps<T> {
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  style$TextOrientation: T;
}

export const textOrientation = <
  T = TextOrientationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextOrientationProps<T>, Theme>> = {}) =>
  style<TextOrientationProps<T>, Theme, Breakpoints>({
    cssProp: 'textOrientation',
    prop: 'style$TextOrientation',
    themeProp,
  });
