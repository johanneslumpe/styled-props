import { BackgroundAttachmentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundAttachmentProps<T> {
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment: T;
}

export const backgroundAttachment = <
  T = BackgroundAttachmentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundAttachmentProps<T>, Theme>> = {}) =>
  style<IBackgroundAttachmentProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundAttachment',
    prop: 'backgroundAttachment',
    themeProp,
  });
