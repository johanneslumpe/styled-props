import { FontFeatureSettingsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontFeatureSettingsProps<T> {
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  style$FontFeatureSettings: T;
}

export const fontFeatureSettings = <
  T = FontFeatureSettingsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontFeatureSettingsProps<T>, Theme>> = {}) =>
  style<FontFeatureSettingsProps<T>, Theme, Breakpoints>({
    cssProp: 'fontFeatureSettings',
    prop: 'style$FontFeatureSettings',
    themeProp,
  });
