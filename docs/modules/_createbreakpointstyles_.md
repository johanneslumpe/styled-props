[@johanneslumpe/styled-props](../README.md) > ["createBreakpointStyles"](../modules/_createbreakpointstyles_.md)

# External module: "createBreakpointStyles"

## Index

### Variables

* [BASE_EMPTY_INDEXED_OBJECT](_createbreakpointstyles_.md#base_empty_indexed_object)
* [BASE_EMPTY_OBJECT](_createbreakpointstyles_.md#base_empty_object)

### Functions

* [createBreakpointStyles](_createbreakpointstyles_.md#createbreakpointstyles)

---

## Variables

<a id="base_empty_indexed_object"></a>

### `<Const>` BASE_EMPTY_INDEXED_OBJECT

**● BASE_EMPTY_INDEXED_OBJECT**: *[Dictionary](../interfaces/_types_.dictionary.md)<`any`>* =  BASE_EMPTY_OBJECT

*Defined in [createBreakpointStyles.ts:5](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/createBreakpointStyles.ts#L5)*

___
<a id="base_empty_object"></a>

### `<Const>` BASE_EMPTY_OBJECT

**● BASE_EMPTY_OBJECT**: *`object`*

*Defined in [createBreakpointStyles.ts:4](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/createBreakpointStyles.ts#L4)*

#### Type declaration

___

## Functions

<a id="createbreakpointstyles"></a>

###  createBreakpointStyles

▸ **createBreakpointStyles**<`T`>(theme: *`T`*, breakpointKeys: *`string`[]*, propValue: *`object`*, themeValue?: *`object`*, cssProp?: *`undefined` \| `string`*, arrayResolver?: *`undefined` \| `function`*): [Styles](../interfaces/_types_.styles.md)

*Defined in [createBreakpointStyles.ts:7](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/createBreakpointStyles.ts#L7)*

**Type parameters:**

#### T :  `object`
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| theme | `T` | - |
| breakpointKeys | `string`[] | - |
| propValue | `object` | - |
| `Default value` themeValue | `object` |  BASE_EMPTY_INDEXED_OBJECT |
| `Optional` cssProp | `undefined` \| `string` | - |
| `Optional` arrayResolver | `undefined` \| `function` | - |

**Returns:** [Styles](../interfaces/_types_.styles.md)

___

