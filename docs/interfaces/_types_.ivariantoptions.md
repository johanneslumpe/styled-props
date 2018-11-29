[@johanneslumpe/styled-props](../README.md) > ["types"](../modules/_types_.md) > [IVariantOptions](../interfaces/_types_.ivariantoptions.md)

# Interface: IVariantOptions

## Type parameters
#### P 
#### T 
#### K :  `Extract`<`keyof T`, `string`>
## Hierarchy

**IVariantOptions**

## Index

### Properties

* [prop](_types_.ivariantoptions.md#prop)
* [themeProp](_types_.ivariantoptions.md#themeprop)

---

## Properties

<a id="prop"></a>

###  prop

**● prop**: *`Extract`<`keyof P`, `string`>*

*Defined in [types.ts:102](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L102)*

The property of the component's props to read from

___
<a id="themeprop"></a>

###  themeProp

**● themeProp**: *`K`*

*Defined in [types.ts:107](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L107)*

The property within the theme to map the `prop` value to

___

