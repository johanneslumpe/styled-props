import { AlignContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignContentProps<T> {
  /**
   * The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent: T;
}

export const alignContent = <
  T = AlignContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignContentProps<T>, Theme>> = {}) =>
  style<IAlignContentProps<T>, Theme, Breakpoints>({
    cssProp: 'alignContent',
    prop: 'alignContent',
    themeProp,
  });
