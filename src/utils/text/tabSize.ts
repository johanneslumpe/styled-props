import { TabSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITabSizeProps<T> {
  tabSize: T;
}

export const tabSize = <
  T = TabSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITabSizeProps<T>, Theme>> = {}) =>
  style<ITabSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'tabSize',
    prop: 'tabSize',
    themeProp,
  });
