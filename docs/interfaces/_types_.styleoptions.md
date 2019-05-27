[@johanneslumpe/styled-props](../README.md) > ["types"](../modules/_types_.md) > [StyleOptions](../interfaces/_types_.styleoptions.md)

# Interface: StyleOptions

## Type parameters
#### P 
#### T 
#### K :  `Extract`<`keyof T`, `string`>
## Hierarchy

**StyleOptions**

## Index

### Properties

* [arrayResolver](_types_.styleoptions.md#arrayresolver)
* [cssProp](_types_.styleoptions.md#cssprop)
* [prop](_types_.styleoptions.md#prop)
* [themeProp](_types_.styleoptions.md#themeprop)

---

## Properties

<a id="arrayresolver"></a>

### `<Optional>` arrayResolver

**● arrayResolver**: *`undefined` \| `function`*

*Defined in [types.ts:91](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/types.ts#L91)*

The resolver to be used for array values

___
<a id="cssprop"></a>

###  cssProp

**● cssProp**: *`string`*

*Defined in [types.ts:76](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/types.ts#L76)*

The css property this function should map to

___
<a id="prop"></a>

###  prop

**● prop**: *`Extract`<`keyof P`, `string`>*

*Defined in [types.ts:81](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/types.ts#L81)*

The property of the component's props to read from

___
<a id="themeprop"></a>

### `<Optional>` themeProp

**● themeProp**: *[K]()*

*Defined in [types.ts:86](https://github.com/johanneslumpe/styled-props/blob/8e709f1/src/types.ts#L86)*

The property within the theme to map the `prop` value to

___

