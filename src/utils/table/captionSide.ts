import { CaptionSidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICaptionSideProps<T> {
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide: T;
}

export const captionSide = <
  T = CaptionSidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICaptionSideProps<T>, Theme>> = {}) =>
  style<ICaptionSideProps<T>, Theme, Breakpoints>({
    cssProp: 'captionSide',
    prop: 'captionSide',
    themeProp,
  });
