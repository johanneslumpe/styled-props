import { GridTemplateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridTemplateProps<T> {
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  style$GridTemplate: T;
}

export const gridTemplate = <
  T = GridTemplateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridTemplateProps<T>, Theme>> = {}) =>
  style<GridTemplateProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplate',
    prop: 'style$GridTemplate',
    themeProp,
  });
