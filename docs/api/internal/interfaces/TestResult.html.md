# Interface: TestResult

Represents the result of a single test.

## Properties

### duration

> **duration**: `number`

Time taken to run the test in milliseconds.

#### Defined in

[src/sdk/models.ts:660](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L660)

***

### errors

> **errors**: `string`[]

Array of error messages if the test failed.

#### Defined in

[src/sdk/models.ts:662](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L662)

***

### status

> **status**: `"pass"` \| `"fail"` \| `"skip"`

The status of the test.

#### Defined in

[src/sdk/models.ts:664](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L664)

***

### testPath

> **testPath**: `string`[]

The path to the test in the test suite.

#### Defined in

[src/sdk/models.ts:666](https://github.com/KaiHikichi/hello-wattson-playground/blob/0c447ba6e1a90b5177462ea1ede17308208d650a/src/sdk/models.ts#L666)