import { MaskCompositeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskCompositeProps<T> {
  maskComposite: T;
}

export const maskComposite = <
  T = MaskCompositeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskCompositeProps<T>, Theme>> = {}) =>
  style<IMaskCompositeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskComposite',
    prop: 'maskComposite',
    themeProp,
  });
