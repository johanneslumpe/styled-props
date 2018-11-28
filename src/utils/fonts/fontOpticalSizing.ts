import { FontOpticalSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontOpticalSizingProps<T> {
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing: T;
}

export const fontOpticalSizing = <
  T = FontOpticalSizingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontOpticalSizingProps<T>, Theme>> = {}) =>
  style<IFontOpticalSizingProps<T>, Theme, Breakpoints>({
    cssProp: 'fontOpticalSizing',
    prop: 'fontOpticalSizing',
    themeProp,
  });
