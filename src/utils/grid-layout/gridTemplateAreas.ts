import { GridTemplateAreasProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridTemplateAreasProps<T> {
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  style$GridTemplateAreas: T;
}

export const gridTemplateAreas = <
  T = GridTemplateAreasProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridTemplateAreasProps<T>, Theme>> = {}) =>
  style<GridTemplateAreasProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateAreas',
    prop: 'style$GridTemplateAreas',
    themeProp,
  });
