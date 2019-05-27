import { JustifyContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface JustifyContentProps<T> {
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  style$JustifyContent: T;
}

export const justifyContent = <
  T = JustifyContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<JustifyContentProps<T>, Theme>> = {}) =>
  style<JustifyContentProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyContent',
    prop: 'style$JustifyContent',
    themeProp,
  });
