import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertNull, assertNullType, isNull } from "./null.ts";
import { type } from "./type.ts";

Deno.test({
  name: "null",
  fn: () => {
    const value: unknown = null;
    const { t, v } = type(value);
    assertNullType(t);
    assertNull(v);
    assertEquals(true, isNull(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not null",
  fn: () => {
    assertThrows(() => assertNull({}))
  }
})
