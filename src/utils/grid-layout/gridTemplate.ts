import { GridTemplateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateProps<T> {
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
