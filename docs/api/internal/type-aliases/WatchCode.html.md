# Type Alias: WatchCode()

> **WatchCode**: (`event`, `fn`) => `object`

Called when the playground code is changed (see [`getCode`](https://livecodes.io/docs/sdk/js-ts#getcode) and [`getConfig`](https://livecodes.io/docs/sdk/js-ts#getcode)).

This includes changes in:
- Code (in editors)
- Editor [languages](https://livecodes.io/docs/languages/)
- [CSS processors](https://livecodes.io/docs/features/css#css-processors)
- [External resources](https://livecodes.io/docs/features/external-resources)
- Project info (e.g. allows adding content in page head and attributes to `<html>` element)
- [Custom settings](https://livecodes.io/docs/advanced/custom-settings) (e.g. allows changing [import maps](https://livecodes.io/docs/features/module-resolution#custom-module-resolution))
- Project title
- [Test](https://livecodes.io/docs/features/tests) code

## Parameters

• **event**: `"code"`

• **fn**

## Returns

`object`

### remove()

> **remove**: () => `void`

#### Returns

`void`

## Defined in

[src/sdk/models.ts:1358](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1358)