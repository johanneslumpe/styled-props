import { FontFeatureSettingsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontFeatureSettingsProps<T> {
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
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
