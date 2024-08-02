import { assertEquals, assertThrows } from "@std/assert";
import { assertBigInt, assertBigIntType, isBigInt } from "./bigint.ts";
import { type } from "./type.ts";

Deno.test({
  name: "bigint",
  fn: () => {
    const value: unknown = BigInt(100);
    const [t, v] = type(value);
    assertBigIntType(t);
    assertBigInt(v);
    assertEquals(true, isBigInt(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not bigint",
  fn: () => {
    assertThrows(() => assertBigInt({}));
  },
});
