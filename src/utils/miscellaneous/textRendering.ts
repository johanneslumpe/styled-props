import { TextRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextRenderingProps<T> {
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  style$TextRendering: T;
}

export const textRendering = <
  T = TextRenderingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextRenderingProps<T>, Theme>> = {}) =>
  style<TextRenderingProps<T>, Theme, Breakpoints>({
    cssProp: 'textRendering',
    prop: 'style$TextRendering',
    themeProp,
  });
