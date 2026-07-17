# Interface: UserConfig

User preferences and settings for the playground.

## Extends

- [`EditorConfig`](EditorConfig.md).[`FormatterConfig`](FormatterConfig.md)

## Extended by

- [`Config`](../../interfaces/Config.md)

## Properties

### appLanguage

> **appLanguage**: `undefined` \| [`AppLanguage`](../type-aliases/AppLanguage.md)

Sets the app UI language used.

#### Defined in

[src/sdk/models.ts:1024](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1024)

***

### autosave

> **autosave**: `boolean`

If `true`, the project is automatically saved on code change,
after time [delay](https://livecodes.io/docs/configuration/configuration-object#delay).

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:973](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L973)

***

### autotest

> **autotest**: `boolean`

If `true`, the project is watched for code changes which trigger tests to auto-run.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:979](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L979)

***

### autoupdate

> **autoupdate**: `boolean`

If `true`, the result page is automatically updated on code change,
after time [delay](https://livecodes.io/docs/configuration/configuration-object#delay).

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:966](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L966)

***

### closeBrackets

> **closeBrackets**: `boolean`

Use auto-complete to close brackets and quotes.

#### Default

```ts
true
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`closeBrackets`](EditorConfig.md#closebrackets)

#### Defined in

[src/sdk/models.ts:937](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L937)

***

### delay

> **delay**: `number`

Time delay (in milliseconds) following code change,
after which the result page is updated (if [`autoupdate`](https://livecodes.io/docs/configuration/configuration-object#autoupdate) is `true`)
and/or the project is saved (if [`autosave`](https://livecodes.io/docs/configuration/configuration-object#autosave) is `true`).

#### Default

```ts
1500
```

#### Defined in

[src/sdk/models.ts:987](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L987)

***

### editor

> **editor**: `undefined` \| `"auto"` \| `"monaco"` \| `"codemirror"` \| `"codejar"`

Selects the [code editor](https://livecodes.io/docs/features/editor-settings#code-editor) to use.

If `undefined` (the default), Monaco editor is used on desktop,
CodeMirror is used on mobile and in `simple` mode,
while CodeJar is used in `codeblock` mode, in `lite` mode and in `readonly` playgrounds.

If set to `auto`, Monaco editor is used on desktop and CodeMirror is used on mobile regardless of other settings.

#### Default

```ts
undefined
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`editor`](EditorConfig.md#editor)

#### Defined in

[src/sdk/models.ts:858](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L858)

***

### editorMode

> **editorMode**: `undefined` \| `"vim"` \| `"emacs"`

Sets [editor mode](https://livecodes.io/docs/features/editor-settings#editor-modes).

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`editorMode`](EditorConfig.md#editormode)

#### Defined in

[src/sdk/models.ts:954](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L954)

***

### editorTheme

> **editorTheme**: `undefined` \| `string` \| [`EditorTheme`](../type-aliases/EditorTheme.md)[]

Sets the [code editor](https://livecodes.io/docs/features/editor-settings) themes.

See docs for [editor themes](https://livecodes.io/docs/configuration/configuration-object#editortheme) for details.

#### Examples

```ts
"vs"
```

```ts
"monaco:twilight, codemirror:one-dark"
```

```ts
["vs@light"]
```

```ts
["vs@light", "vs-dark@dark"]
```

```ts
["monaco:vs@light", "codemirror:github-light@light", "dracula@dark"]
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`editorTheme`](EditorConfig.md#editortheme)

#### Defined in

[src/sdk/models.ts:884](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L884)

***

### emmet

> **emmet**: `boolean`

Enables [Emmet](https://livecodes.io/docs/features/editor-settings#emmet).

#### Default

```ts
true
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`emmet`](EditorConfig.md#emmet)

#### Defined in

[src/sdk/models.ts:949](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L949)

***

### foldRegions

> **foldRegions**: `boolean`

When set to `true`, regions marked by `#region` and `#endregion` comments are folded when the project is loaded.

#### Default

```ts
false
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`foldRegions`](EditorConfig.md#foldregions)

#### Defined in

[src/sdk/models.ts:931](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L931)

***

### fontFamily

> **fontFamily**: `undefined` \| `string`

Sets the [code editor](https://livecodes.io/docs/features/editor-settings) font family.

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`fontFamily`](EditorConfig.md#fontfamily)

#### Defined in

[src/sdk/models.ts:889](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L889)

***

### fontSize

> **fontSize**: `undefined` \| `number`

Sets the font size.

If `undefined` (the default), the font size is set to 14 for the full app and 12 for [embeds](https://livecodes.io/docs/features/embeds).

#### Default

```ts
undefined
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`fontSize`](EditorConfig.md#fontsize)

#### Defined in

[src/sdk/models.ts:897](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L897)

***

### formatOnsave

> **formatOnsave**: `boolean`

If `true`, the code is automatically [formatted](https://livecodes.io/docs/features/code-format) on saving the project.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:993](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L993)

***

### layout

> **layout**: `undefined` \| `"responsive"` \| `"horizontal"` \| `"vertical"`

Sets the app layout to horizontal or vertical.
If set to `"responsive"` (the default) or `undefined`,
the layout is vertical in small screens when the playground height is larger than its width,
otherwise horizontal.

#### Default

```ts
"responsive"
```

#### Defined in

[src/sdk/models.ts:1002](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1002)

***

### lineNumbers

> **lineNumbers**: `boolean` \| `"relative"`

Show line numbers in [code editor](https://livecodes.io/docs/features/editor-settings).

#### Default

```ts
true
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`lineNumbers`](EditorConfig.md#linenumbers)

#### Defined in

[src/sdk/models.ts:919](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L919)

***

### minimap

> **minimap**: `boolean`

Enables minimap in code editor.

#### Default

```ts
false
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`minimap`](EditorConfig.md#minimap)

#### Defined in

[src/sdk/models.ts:943](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L943)

***

### recoverUnsaved

> **recoverUnsaved**: `boolean`

Enables [recovering last unsaved project](https://livecodes.io/docs/features/recover) when the app is reopened.

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1008](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1008)

***

### semicolons

> **semicolons**: `boolean`

Configures Prettier [code formatter](https://livecodes.io/docs/features/code-format) to use semi-colons.

#### Default

```ts
true
```

#### Inherited from

[`FormatterConfig`](FormatterConfig.md).[`semicolons`](FormatterConfig.md#semicolons)

#### Defined in

[src/sdk/models.ts:829](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L829)

***

### showSpacing

> **showSpacing**: `boolean`

Enables [showing element spacing](https://livecodes.io/docs/features/result#show-spacings) in the result page.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1014](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1014)

***

### singleQuote

> **singleQuote**: `boolean`

Configures Prettier [code formatter](https://livecodes.io/docs/features/code-format) to use single quotes instead of double quotes.

#### Default

```ts
false
```

#### Inherited from

[`FormatterConfig`](FormatterConfig.md).[`singleQuote`](FormatterConfig.md#singlequote)

#### Defined in

[src/sdk/models.ts:834](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L834)

***

### tabSize

> **tabSize**: `number`

The number of spaces per indentation-level.

Also used in [code formatting](https://livecodes.io/docs/features/code-format).

#### Default

```ts
2
```

#### Inherited from

[`FormatterConfig`](FormatterConfig.md).[`tabSize`](FormatterConfig.md#tabsize)

#### Defined in

[src/sdk/models.ts:913](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L913)

***

### theme

> **theme**: [`Theme`](../type-aliases/Theme.md)

Sets the app [theme](https://livecodes.io/docs/features/themes) to light/dark mode.

#### Default

```ts
"dark"
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`theme`](EditorConfig.md#theme)

#### Defined in

[src/sdk/models.ts:864](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L864)

***

### themeColor

> **themeColor**: `undefined` \| `string`

Sets the app theme color.
If `undefined`, it is set to `"hsl(214, 40%, 50%)"`.

#### Default

```ts
undefined
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`themeColor`](EditorConfig.md#themecolor)

#### Defined in

[src/sdk/models.ts:871](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L871)

***

### trailingComma

> **trailingComma**: `boolean`

Configures Prettier [code formatter](https://livecodes.io/docs/features/code-format) to use [trailing commas](https://prettier.io/docs/en/options.html#trailing-commas).

#### Default

```ts
true
```

#### Inherited from

[`FormatterConfig`](FormatterConfig.md).[`trailingComma`](FormatterConfig.md#trailingcomma)

#### Defined in

[src/sdk/models.ts:840](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L840)

***

### useTabs

> **useTabs**: `boolean`

If `true`, lines are indented with tabs instead of spaces.

Also used in [code formatting](https://livecodes.io/docs/features/code-format).

#### Default

```ts
false
```

#### Inherited from

[`FormatterConfig`](FormatterConfig.md).[`useTabs`](FormatterConfig.md#usetabs)

#### Defined in

[src/sdk/models.ts:905](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L905)

***

### welcome

> **welcome**: `boolean`

If `true`, the [welcome screen](https://livecodes.io/docs/features/welcome) is displayed when the app loads.

#### Defined in

[src/sdk/models.ts:1019](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1019)

***

### wordWrap

> **wordWrap**: `boolean`

Enables word-wrap for long lines.

#### Default

```ts
false
```

#### Inherited from

[`EditorConfig`](EditorConfig.md).[`wordWrap`](EditorConfig.md#wordwrap)

#### Defined in

[src/sdk/models.ts:925](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L925)