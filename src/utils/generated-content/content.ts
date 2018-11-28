import { ContentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IContentProps<T> {
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content: T;
}

export const content = <
  T = ContentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IContentProps<T>, Theme>> = {}) =>
  style<IContentProps<T>, Theme, Breakpoints>({
    cssProp: 'content',
    prop: 'content',
    themeProp,
  });
