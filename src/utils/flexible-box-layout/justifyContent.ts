import { JustifyContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IJustifyContentProps<T> {
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent: T;
}

export const justifyContent = <
  T = JustifyContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IJustifyContentProps<T>, Theme>> = {}) =>
  style<IJustifyContentProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyContent',
    prop: 'justifyContent',
    themeProp,
  });
