import { UnicodeBidiPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IUnicodeBidiProps<T> {
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi: T;
}

export const unicodeBidi = <
  T = UnicodeBidiPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IUnicodeBidiProps<T>, Theme>> = {}) =>
  style<IUnicodeBidiProps<T>, Theme, Breakpoints>({
    cssProp: 'unicodeBidi',
    prop: 'unicodeBidi',
    themeProp,
  });
