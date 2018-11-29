[@johanneslumpe/styled-props](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [IBaseCssValue](../interfaces/_types_.ibasecssvalue.md)
* [IBreakpointTheme](../interfaces/_types_.ibreakpointtheme.md)
* [IDictionary](../interfaces/_types_.idictionary.md)
* [IStyleOptions](../interfaces/_types_.istyleoptions.md)
* [IStyles](../interfaces/_types_.istyles.md)
* [ITheme](../interfaces/_types_.itheme.md)
* [IVariantOptions](../interfaces/_types_.ivariantoptions.md)

### Type aliases

* [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)
* [ResponsiveObject](_types_.md#responsiveobject)
* [ResponsiveProp](_types_.md#responsiveprop)
* [ResponsivePropValue](_types_.md#responsivepropvalue)
* [StyleProps](_types_.md#styleprops)
* [ThemeWithBreakpoints](_types_.md#themewithbreakpoints)
* [WithTheme](_types_.md#withtheme)

---

## Type aliases

<a id="inferpropsfromfunctionargument"></a>

###  InferPropsFromFunctionArgument

**ΤInferPropsFromFunctionArgument**: *`InferPropsFromFunctionArgument&lt;T&gt;`*

*Defined in [types.ts:8](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L8)*

___
<a id="responsiveobject"></a>

###  ResponsiveObject

**ΤResponsiveObject**: *`object`*

*Defined in [types.ts:49](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L49)*

#### Type declaration

___
<a id="responsiveprop"></a>

###  ResponsiveProp

**ΤResponsiveProp**: *`ResponsiveProp&lt;ValueType, BreakPoints&gt;`*

*Defined in [types.ts:39](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L39)*

___
<a id="responsivepropvalue"></a>

###  ResponsivePropValue

**ΤResponsivePropValue**: * `object` & [IBaseCssValue](../interfaces/_types_.ibasecssvalue.md)<`ValueType`>
*

*Defined in [types.ts:34](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L34)*

___
<a id="styleprops"></a>

###  StyleProps

**ΤStyleProps**: * [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T1`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T2`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T3`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T4`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T5`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T6`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T7`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T8`> & [InferPropsFromFunctionArgument](_types_.md#inferpropsfromfunctionargument)<`T9`>
*

*Defined in [types.ts:14](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L14)*

___
<a id="themewithbreakpoints"></a>

###  ThemeWithBreakpoints

**ΤThemeWithBreakpoints**: *`ThemeWithBreakpoints&lt;T, B&gt;`*

*Defined in [types.ts:61](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L61)*

___
<a id="withtheme"></a>

###  WithTheme

**ΤWithTheme**: * [ResponsiveObject](_types_.md#responsiveobject)<`P`, `B`> & [ThemeWithBreakpoints](_types_.md#themewithbreakpoints)<`T`, `B`>
*

*Defined in [types.ts:65](https://github.com/johanneslumpe/styled-props/blob/3abf398/src/types.ts#L65)*

___

