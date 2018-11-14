[@johanneslumpe/styled-props](../README.md) > ["types"](../modules/_types_.md) > [IStyleOptions](../interfaces/_types_.istyleoptions.md)

# Interface: IStyleOptions

## Type parameters
#### P 
#### T 
#### K :  `Extract`<`keyof T`, `string`>
## Hierarchy

**IStyleOptions**

## Index

### Properties

* [arrayResolver](_types_.istyleoptions.md#arrayresolver)
* [cssProp](_types_.istyleoptions.md#cssprop)
* [prop](_types_.istyleoptions.md#prop)
* [themeProp](_types_.istyleoptions.md#themeprop)

---

## Properties

<a id="arrayresolver"></a>

### `<Optional>` arrayResolver

**● arrayResolver**: * `undefined` &#124; `function`
*

*Defined in [types.ts:69](https://github.com/johanneslumpe/styled-props/blob/86dd9fd/src/types.ts#L69)*

The resolver to be used for array values

___
<a id="cssprop"></a>

###  cssProp

**● cssProp**: *`string`*

*Defined in [types.ts:54](https://github.com/johanneslumpe/styled-props/blob/86dd9fd/src/types.ts#L54)*

The css property this function should map to

___
<a id="prop"></a>

###  prop

**● prop**: *`Extract`<`keyof P`, `string`>*

*Defined in [types.ts:59](https://github.com/johanneslumpe/styled-props/blob/86dd9fd/src/types.ts#L59)*

The property of the component's props to read from

___
<a id="themeprop"></a>

### `<Optional>` themeProp

**● themeProp**: *[K]()*

*Defined in [types.ts:64](https://github.com/johanneslumpe/styled-props/blob/86dd9fd/src/types.ts#L64)*

The property within the theme to map the `prop` value to

___

