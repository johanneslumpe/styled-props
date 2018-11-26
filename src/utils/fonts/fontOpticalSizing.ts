import { FontOpticalSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontOpticalSizingProps<T> {
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
