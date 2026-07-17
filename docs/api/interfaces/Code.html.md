# Interface: Code

An object that contains the language, content and compiled code for each of the 3 [code editors](https://livecodes.io/docs/features/projects)
and the [result page](https://livecodes.io/docs/features/result) HTML.

See [docs](https://livecodes.io/docs/api/interfaces/Code) for details.

## Properties

### markup

> **markup**: `object`

Markup editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1290](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1290)

***

### result

> **result**: `string`

The HTML content of the result page.

#### Defined in

[src/sdk/models.ts:1317](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1317)

***

### script

> **script**: `object`

Script editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1308](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1308)

***

### style

> **style**: `object`

Style editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1299](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L1299)