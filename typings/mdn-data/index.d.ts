declare module 'mdn-data' {
  export interface IRawSyntax {
    syntax: string;
  }

  export type PropertyStatus = 'standard' | 'nonstandard' | 'experimental';

  export interface IRawProperty extends IRawSyntax {
    status: PropertyStatus;
    groups: string[];
  }

  export interface IRawProperties {
    [index: string]: IRawProperty;
  }
}

declare module 'mdn-data/css/properties.json' {
  import { IRawProperties } from 'mdn-data';

  const value: IRawProperties;
  export default value;
}
