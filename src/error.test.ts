import { assertThrows } from "std/assert/assert_throws.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { assertError, assertErrorType, isError } from "./error.ts";
import { type } from "./type.ts";

Deno.test({
  name: "error",
  fn: () => {
    const value: unknown = new Error("test");
    const { t, v } = type(value);
    assertErrorType(t);
    assertError(v);
    assertEquals(true, isError(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not error",
  fn: () => {
    assertThrows(() => assertError({}))
  }
})
