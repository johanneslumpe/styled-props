[styled-props](../README.md) > ["types"](../modules/_types_.md) > [IStyleOptions](../interfaces/_types_.istyleoptions.md)

# Interface: IStyleOptions

## Type parameters
#### P 
#### T 
## Hierarchy

**IStyleOptions**

## Index

### Properties

* [cssProp](_types_.istyleoptions.md#cssprop)
* [prop](_types_.istyleoptions.md#prop)
* [themeProp](_types_.istyleoptions.md#themeprop)

---

## Properties

<a id="cssprop"></a>

###  cssProp

**● cssProp**: *`string`*

*Defined in [types.ts:50](https://github.com/johanneslumpe/styled-props/blob/892c9ca/src/types.ts#L50)*

The css property this function should map to

___
<a id="prop"></a>

###  prop

**● prop**: *`Extract`<`keyof P`, `string`>*

*Defined in [types.ts:54](https://github.com/johanneslumpe/styled-props/blob/892c9ca/src/types.ts#L54)*

The property of the component's props to read from

___
<a id="themeprop"></a>

### `<Optional>` themeProp

**● themeProp**: *`Extract`<`keyof T`, `string`>*

*Defined in [types.ts:58](https://github.com/johanneslumpe/styled-props/blob/892c9ca/src/types.ts#L58)*

The property within the theme to map the `prop` value to

___

