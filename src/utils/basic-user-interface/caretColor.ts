import { CaretColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICaretColorProps<T> {
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor: T;
}

export const caretColor = <
  T = CaretColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICaretColorProps<T>, Theme>> = {}) =>
  style<ICaretColorProps<T>, Theme, Breakpoints>({
    cssProp: 'caretColor',
    prop: 'caretColor',
    themeProp,
  });
