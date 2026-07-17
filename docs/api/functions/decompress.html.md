# Function: decompress()

> **decompress**(`compressed`): `null` \| `string`

A utility function that allows decompressing the config object (compressed by [compress](compress.md)).
It decodes it to a string that should be JSON.parsed.

This is the `decompressFromEncodedURIComponent` function re-exported from `lz-string` for convenience.

## Parameters

• **compressed**: `string`

A string obtained from a call to compressToEncodedURIComponent().

## Returns

`null` \| `string`

The decompressed string or `null` if it fails

## Param

The string to be decompressed

## Example

```ts
const decompressed = decompress(str);
if (decompressed) {
  try {
    const config = JSON.parse(decompressed);
  } catch {
    // invalid JSON
  }
}
```

## Defined in

[src/sdk/index.ts:550](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/index.ts#L550)