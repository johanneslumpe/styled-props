import { GridTemplateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateProps<T> {
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate: T;
}

export const gridTemplate = <
  T = GridTemplateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridTemplateProps<T>, Theme>> = {}) =>
  style<IGridTemplateProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplate',
    prop: 'gridTemplate',
    themeProp,
  });
