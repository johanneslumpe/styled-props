import { MarginBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginBlockEndProps<T> {
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd: T;
}

export const marginBlockEnd = <
  T = MarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginBlockEndProps<T>, Theme>> = {}) =>
  style<IMarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlockEnd',
    prop: 'marginBlockEnd',
    themeProp,
  });
