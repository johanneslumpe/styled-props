import { TabSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITabSizeProps<T> {
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
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
