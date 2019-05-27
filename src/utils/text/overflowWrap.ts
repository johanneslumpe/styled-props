import { OverflowWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OverflowWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  style$OverflowWrap: T;
}

export const overflowWrap = <
  T = OverflowWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OverflowWrapProps<T>, Theme>> = {}) =>
  style<OverflowWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowWrap',
    prop: 'style$OverflowWrap',
    themeProp,
  });
