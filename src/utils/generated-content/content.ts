import { ContentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IContentProps<T> {
  content: T;
}

export const content = <
  T = ContentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IContentProps<T>, Theme>> = {}) =>
  style<IContentProps<T>, Theme, Breakpoints>({
    cssProp: 'content',
    prop: 'content',
    themeProp,
  });
