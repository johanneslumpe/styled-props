[@johanneslumpe/styled-props](../README.md) > ["style"](../modules/_style_.md)

# External module: "style"

## Index

### Functions

* [DEFAULT_ARRAY_RESOLVER](_style_.md#default_array_resolver)
* [style](_style_.md#style)

---

## Functions

<a id="default_array_resolver"></a>

### `<Const>` DEFAULT_ARRAY_RESOLVER

▸ **DEFAULT_ARRAY_RESOLVER**(value: *`Array`<`string` \| `number`>*): `string`

*Defined in [style.ts:5](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/style.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Array`<`string` \| `number`> |

**Returns:** `string`

___
<a id="style"></a>

###  style

▸ **style**<`P`,`T`,`B`>(__namedParameters: *`object`*): `styleImplementation`

*Defined in [style.ts:8](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/style.ts#L8)*

**Type parameters:**

#### P 
#### T :  `__type`
#### B :  `__type`
**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| arrayResolver | `function` |  DEFAULT_ARRAY_RESOLVER |
| cssProp | `string` | - |
| prop | `Extract<keyof P, string>` | - |
| themeProp | `undefined` \| `Extract<keyof T, string>` | - |

**Returns:** `styleImplementation`

___

