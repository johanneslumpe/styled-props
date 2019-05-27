import { CaptionSidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface CaptionSideProps<T> {
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  style$CaptionSide: T;
}

export const captionSide = <
  T = CaptionSidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<CaptionSideProps<T>, Theme>> = {}) =>
  style<CaptionSideProps<T>, Theme, Breakpoints>({
    cssProp: 'captionSide',
    prop: 'style$CaptionSide',
    themeProp,
  });
