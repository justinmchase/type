# type

Simple type inference for javascript runtimes

## Usage

```ts
import { Type, type } from "https://deno.land/x/type/mod.ts";

const value: unknown = {};
const t = type(value); // Type.Object
```
