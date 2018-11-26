import { FontFeatureSettingsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontFeatureSettingsProps<T> {
  fontFeatureSettings: T;
}

export const fontFeatureSettings = <
  T = FontFeatureSettingsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontFeatureSettingsProps<T>, Theme>> = {}) =>
  style<IFontFeatureSettingsProps<T>, Theme, Breakpoints>({
    cssProp: 'fontFeatureSettings',
    prop: 'fontFeatureSettings',
    themeProp,
  });
