export type CSSDisplayValues =
  | 'block'
  | 'inline'
  | 'table'
  | 'flex'
  | 'grid'
  | 'list-item'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'none'
  | 'inline-block'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'
  | 'inherit'
  | 'initial'
  | 'unset';

export interface IDisplayProps {
  display: CSSDisplayValues;
}
