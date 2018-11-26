import { BackgroundAttachmentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundAttachmentProps<T> {
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
