# Interface: AppConfig

These are properties that define how the app behaves.

## Extended by

- [`Config`](../../interfaces/Config.md)

## Properties

### allowLangChange

> **allowLangChange**: `boolean`

If `false`, the UI will not show the menu that allows changing editor language.

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1044](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1044)

***

### disableHomeLink

> **disableHomeLink**: `boolean`

If `true`, the link on LiveCodes logo ("Edit on LiveCodes") is disabled in [embeds](https://livecodes.io/docs/features/embeds).

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1088](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1088)

***

### mode

> **mode**: `"editor"` \| `"result"` \| `"full"` \| `"focus"` \| `"lite"` \| `"simple"` \| `"codeblock"`

Sets the [display mode](https://livecodes.io/docs/features/display-modes).

#### Default

```ts
"full"
```

#### Defined in

[src/sdk/models.ts:1056](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1056)

***

### readonly

> **readonly**: `boolean`

If `true`, editors are loaded in read-only mode, where the user is not allowed to change the code.

By default, when readonly is set to true, the light-weight code editor [CodeJar](https://livecodes.io/docs/features/editor-settings#code-editor) is used.
If you wish to use another editor, set the [editor](https://livecodes.io/docs/configuration/configuration-object#editor) property.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1038](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1038)

***

### tools

> **tools**: `Partial`\<`object`\>

Sets enabled and active tools and status of [tools pane](https://livecodes.io/docs/features/tools-pane).

#### Type declaration

##### active

> **active**: `""` \| [`ToolName`](../type-aliases/ToolName.md)

##### enabled

> **enabled**: ([`ToolName`](../type-aliases/ToolName.md) \| `"zoom"`)[] \| `"all"`

##### status

> **status**: [`ToolsPaneStatus`](../type-aliases/ToolsPaneStatus.md)

#### Default

```ts
{ enabled: "all", active: "", status: "" }
```

#### Example

```js
{
  "tools": {
    "enabled": ["console", "compiled"],
    "active": "console",
    "status": "open"
  }
}
```

#### Defined in

[src/sdk/models.ts:1072](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1072)

***

### view?

> `optional` **view**: `"split"` \| `"editor"` \| `"result"`

Sets the [default view](https://livecodes.io/docs/features/default-view) for the playground.

#### Default

```ts
"split"
```

#### Defined in

[src/sdk/models.ts:1050](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1050)

***

### zoom

> **zoom**: `0.25` \| `0.5` \| `1`

Sets result page [zoom level](https://livecodes.io/docs/features/result#result-page-zoom).

#### Defined in

[src/sdk/models.ts:1081](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1081)