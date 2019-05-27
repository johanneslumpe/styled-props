import { AlignContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AlignContentProps<T> {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  style$AlignContent: T;
}

export const alignContent = <
  T = AlignContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AlignContentProps<T>, Theme>> = {}) =>
  style<AlignContentProps<T>, Theme, Breakpoints>({
    cssProp: 'alignContent',
    prop: 'style$AlignContent',
    themeProp,
  });
