# type

Simple type inference for javascript runtimes

## Usage

```ts
import { Type, type } from "https://deno.land/x/type/mod.ts";

const value: unknown = BigInt(100);
const [t, v] = type(value); // [Type.BigInt, bigint]
```

Additionally, each type has an `is{Type}`, `assert{Type}`, and
`assert{Type}Type` helper function available.

```ts
import { type } from "https://deno.land/x/type/mod.ts";
import {
  assertBigInt,
  assertBigIntType,
  isBigInt,
} from "https://deno.land/x/type/src/bigint.ts";

const [t, v] = type(BigInt(100));
isBigInt(v); // true
assertBigInt(v); // void
assertBigIntType(t); // void
```

## Type Map

| value         | type             | as                        |
| ------------- | ---------------- | ------------------------- |
| `[]`          | `Type.Array`     | `unknown[]`               |
| `BigInt(100)` | `Type.BigInt`    | `bigint`                  |
| `true\|false` | `Type.Boolean`   | `boolean`                 |
| `new Error()` | `Type.Error`     | `Error`                   |
| `() => {}`    | `Type.Function`  | `Function`                |
| `null`        | `Type.Null`      | `null`                    |
| `1.23`        | `Type.Number`    | `number`                  |
| `{}`          | `Type.Object`    | `Record<string, unknown>` |
| `""`          | `Type.String`    | `string`                  |
| `Symbol()`    | `Type.Symbol`    | `symbol`                  |
| `undefined`   | `Type.Undefined` | `undefined`               |
