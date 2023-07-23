import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertUndefined, assertUndefinedType, isUndefined } from "./undefined.ts";
import { type } from "./type.ts";

Deno.test({
  name: "undefined",
  fn: () => {
    const value: unknown = undefined;
    const { t, v } = type(value);
    assertUndefinedType(t);
    assertUndefined(v);
    assertEquals(true, isUndefined(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not undefined",
  fn: () => {
    assertThrows(() => assertUndefined({}))
  }
})
