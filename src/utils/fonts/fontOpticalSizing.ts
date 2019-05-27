import { FontOpticalSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontOpticalSizingProps<T> {
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  style$FontOpticalSizing: T;
}

export const fontOpticalSizing = <
  T = FontOpticalSizingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontOpticalSizingProps<T>, Theme>> = {}) =>
  style<FontOpticalSizingProps<T>, Theme, Breakpoints>({
    cssProp: 'fontOpticalSizing',
    prop: 'style$FontOpticalSizing',
    themeProp,
  });
