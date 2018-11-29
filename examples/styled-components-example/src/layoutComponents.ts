import { MarginProperty, PaddingProperty } from '@johanneslumpe/css-types';
import styled from 'styled-components';

import { theme } from './theme';

import { StyleProps } from '../../../src/types';
import { margin } from '../../../src/utils/box-model/margin';
import { padding } from '../../../src/utils/box-model/padding';
import { variant } from '../../../src/variant';

interface IVariantProps<T> {
  variant: T;
}

type Theme = typeof theme;
type Breakpoints = typeof theme.breakpoints;

const buttonVariants = variant<
  IVariantProps<keyof typeof theme.buttonVariants>,
  Theme,
  Breakpoints
>({ prop: 'variant', themeProp: 'buttonVariants' });

const marginUtil = margin<MarginProperty, Theme, Breakpoints>();
const paddingUtil = padding<PaddingProperty, Theme, Breakpoints>();

export const Button = styled.button<
  StyleProps<typeof buttonVariants, typeof marginUtil, typeof paddingUtil>
>`${buttonVariants}${marginUtil}${paddingUtil}`;
