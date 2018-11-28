import { GridTemplateAreasProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateAreasProps<T> {
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas: T;
}

export const gridTemplateAreas = <
  T = GridTemplateAreasProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridTemplateAreasProps<T>, Theme>> = {}) =>
  style<IGridTemplateAreasProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateAreas',
    prop: 'gridTemplateAreas',
    themeProp,
  });
