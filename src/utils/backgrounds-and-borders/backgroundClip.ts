import { BackgroundClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundClipProps<T> {
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  style$BackgroundClip: T;
}

export const backgroundClip = <
  T = BackgroundClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundClipProps<T>, Theme>> = {}) =>
  style<BackgroundClipProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundClip',
    prop: 'style$BackgroundClip',
    themeProp,
  });
