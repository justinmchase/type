import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertObject, assertObjectType, isObject } from "./object.ts";
import { type } from "./type.ts";

Deno.test({
  name: "object",
  fn: () => {
    const value: unknown = {};
    const { t, v } = type(value);
    assertObjectType(t);
    assertObject(v);
    assertEquals(true, isObject(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not object",
  fn: () => {
    assertThrows(() => assertObject([]))
  }
})
