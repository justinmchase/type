import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertFunction, assertFunctionType, isFunction } from "./function.ts";
import { type } from "./type.ts";

Deno.test({
  name: "function",
  fn: () => {
    const value: unknown = () => {};
    const { t, v } = type(value);
    assertFunctionType(t);
    assertFunction(v);
    assertEquals(true, isFunction(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not function",
  fn: () => {
    assertThrows(() => assertFunction({}))
  }
})
