import { OverflowWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap: T;
}

export const overflowWrap = <
  T = OverflowWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowWrapProps<T>, Theme>> = {}) =>
  style<IOverflowWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowWrap',
    prop: 'overflowWrap',
    themeProp,
  });
