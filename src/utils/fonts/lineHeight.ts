import { LineHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILineHeightProps<T> {
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight: T;
}

export const lineHeight = <
  T = LineHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILineHeightProps<T>, Theme>> = {}) =>
  style<ILineHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'lineHeight',
    prop: 'lineHeight',
    themeProp,
  });
