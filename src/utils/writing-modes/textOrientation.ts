import { TextOrientationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextOrientationProps<T> {
  /**
   * The **`text-orientation`** CSS property defines the orientation of the text characters in a line. This property only has an effect in vertical mode, that is, when `writing-mode` is not `horizontal-tb`. It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation: T;
}

export const textOrientation = <
  T = TextOrientationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextOrientationProps<T>, Theme>> = {}) =>
  style<ITextOrientationProps<T>, Theme, Breakpoints>({
    cssProp: 'textOrientation',
    prop: 'textOrientation',
    themeProp,
  });
