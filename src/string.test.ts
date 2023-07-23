import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertString, assertStringType, isString } from "./string.ts";
import { type } from "./type.ts";

Deno.test({
  name: "string",
  fn: () => {
    const value: unknown = "";
    const [t, v] = type(value);
    assertStringType(t);
    assertString(v);
    assertEquals(true, isString(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not string",
  fn: () => {
    assertThrows(() => assertString({}));
  },
});
