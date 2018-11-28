import { TextEmphasisColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisColorProps<T> {
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor: T;
}

export const textEmphasisColor = <
  T = TextEmphasisColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisColorProps<T>, Theme>> = {}) =>
  style<ITextEmphasisColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisColor',
    prop: 'textEmphasisColor',
    themeProp,
  });
