import { ClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClipProps<T> {
  /**
   * The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clip
   */
  clip: T;
}

export const clip = <
  T = ClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClipProps<T>, Theme>> = {}) =>
  style<IClipProps<T>, Theme, Breakpoints>({
    cssProp: 'clip',
    prop: 'clip',
    themeProp,
  });
