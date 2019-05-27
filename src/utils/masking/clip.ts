import { ClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ClipProps<T> {
  /**
   * The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clip
   */
  style$Clip: T;
}

export const clip = <
  T = ClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ClipProps<T>, Theme>> = {}) =>
  style<ClipProps<T>, Theme, Breakpoints>({
    cssProp: 'clip',
    prop: 'style$Clip',
    themeProp,
  });
