import { BackgroundClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundClipProps<T> {
  /**
   * The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip: T;
}

export const backgroundClip = <
  T = BackgroundClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundClipProps<T>, Theme>> = {}) =>
  style<IBackgroundClipProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundClip',
    prop: 'backgroundClip',
    themeProp,
  });
