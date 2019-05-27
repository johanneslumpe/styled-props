import { BackgroundAttachmentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundAttachmentProps<T> {
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  style$BackgroundAttachment: T;
}

export const backgroundAttachment = <
  T = BackgroundAttachmentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundAttachmentProps<T>, Theme>> = {}) =>
  style<BackgroundAttachmentProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundAttachment',
    prop: 'style$BackgroundAttachment',
    themeProp,
  });
