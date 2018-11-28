import { ClipPathProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClipPathProps<T> {
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath: T;
}

export const clipPath = <
  T = ClipPathProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClipPathProps<T>, Theme>> = {}) =>
  style<IClipPathProps<T>, Theme, Breakpoints>({
    cssProp: 'clipPath',
    prop: 'clipPath',
    themeProp,
  });
