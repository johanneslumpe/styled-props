import { DisplayPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IDisplayProps<T> {
  /**
   * The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display: T;
}

export const display = <
  T = DisplayPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IDisplayProps<T>, Theme>> = {}) =>
  style<IDisplayProps<T>, Theme, Breakpoints>({
    cssProp: 'display',
    prop: 'display',
    themeProp,
  });
