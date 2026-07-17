# Function: compress()

> **compress**(`uncompressed`): `string`

A utility function that allows compressing the stringified config object (e.g. for sharing in URL hash)
It encodes it in base64 with a few tweaks to make it URI safe.

This is the `compressToEncodedURIComponent` function re-exported from `lz-string` for convenience.

## Parameters

• **uncompressed**: `string`

A string which should be compressed.

## Returns

`string`

The compressed string

## Param

The string to be compressed (e.g. stringified config object)

## Example

```ts
const compressed = compress(JSON.stringify(config));
```

## Defined in

[src/sdk/index.ts:527](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/index.ts#L527)