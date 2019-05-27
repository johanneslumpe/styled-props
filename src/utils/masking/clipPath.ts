import { ClipPathProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ClipPathProps<T> {
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  style$ClipPath: T;
}

export const clipPath = <
  T = ClipPathProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ClipPathProps<T>, Theme>> = {}) =>
  style<ClipPathProps<T>, Theme, Breakpoints>({
    cssProp: 'clipPath',
    prop: 'style$ClipPath',
    themeProp,
  });
