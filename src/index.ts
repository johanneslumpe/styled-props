import { IDisplayProps } from './cssTypes';
import { style } from './style';

export * from './cssTypes';
export { style } from './style';
export { IStyles } from './types';

export const display = style<IDisplayProps>({
  cssProp: 'display',
  prop: 'display',
});
