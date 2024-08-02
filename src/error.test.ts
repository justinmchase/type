import { assertEquals, assertThrows } from "@std/assert";
import { assertError, assertErrorType, isError } from "./error.ts";
import { type } from "./type.ts";

Deno.test({
  name: "error",
  fn: () => {
    const value: unknown = new Error("test");
    const [t, v] = type(value);
    assertErrorType(t);
    assertError(v);
    assertEquals(true, isError(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not error",
  fn: () => {
    assertThrows(() => assertError({}));
  },
});
