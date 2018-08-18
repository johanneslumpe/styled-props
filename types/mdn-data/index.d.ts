declare module 'mdn-data/css/units.json' {
  export type CSSUnitGroups =
    | 'CSS Units'
    | 'CSS Lengths'
    | 'CSS Angles'
    | 'CSS Resolutions'
    | 'CSS Flexible Lengths'
    | 'CSS Grid Layout'
    | 'CSS Frequencies'
    | 'CSS Times';

  export type CSSStatus = 'standard' | 'experimental';
  interface IUnit {
    groups: CSSUnitGroups[];
    status: CSSStatus;
  }
  interface IUnitShape {
    [index: string]: IUnit;
  }
  const value: IUnitShape;
  export default value;
}
