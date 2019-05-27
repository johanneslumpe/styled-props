import { LineHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface LineHeightProps<T> {
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  style$LineHeight: T;
}

export const lineHeight = <
  T = LineHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<LineHeightProps<T>, Theme>> = {}) =>
  style<LineHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'lineHeight',
    prop: 'style$LineHeight',
    themeProp,
  });
