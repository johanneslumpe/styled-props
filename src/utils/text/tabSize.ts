import { TabSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TabSizeProps<T> {
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  style$TabSize: T;
}

export const tabSize = <
  T = TabSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TabSizeProps<T>, Theme>> = {}) =>
  style<TabSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'tabSize',
    prop: 'style$TabSize',
    themeProp,
  });
