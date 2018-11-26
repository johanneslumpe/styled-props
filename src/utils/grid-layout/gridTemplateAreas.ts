import { GridTemplateAreasProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateAreasProps<T> {
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
