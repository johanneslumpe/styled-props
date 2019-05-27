import { CaretColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface CaretColorProps<T> {
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  style$CaretColor: T;
}

export const caretColor = <
  T = CaretColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<CaretColorProps<T>, Theme>> = {}) =>
  style<CaretColorProps<T>, Theme, Breakpoints>({
    cssProp: 'caretColor',
    prop: 'style$CaretColor',
    themeProp,
  });
