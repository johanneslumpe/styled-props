import { TextRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextRenderingProps<T> {
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering: T;
}

export const textRendering = <
  T = TextRenderingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextRenderingProps<T>, Theme>> = {}) =>
  style<ITextRenderingProps<T>, Theme, Breakpoints>({
    cssProp: 'textRendering',
    prop: 'textRendering',
    themeProp,
  });
