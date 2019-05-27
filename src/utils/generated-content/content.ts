import { ContentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ContentProps<T> {
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  style$Content: T;
}

export const content = <
  T = ContentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ContentProps<T>, Theme>> = {}) =>
  style<ContentProps<T>, Theme, Breakpoints>({
    cssProp: 'content',
    prop: 'style$Content',
    themeProp,
  });
