import { CaptionSidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICaptionSideProps<T> {
  captionSide: T;
}

export const captionSide = <
  T = CaptionSidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICaptionSideProps<T>, Theme>> = {}) =>
  style<ICaptionSideProps<T>, Theme, Breakpoints>({
    cssProp: 'captionSide',
    prop: 'captionSide',
    themeProp,
  });
