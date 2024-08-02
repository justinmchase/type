import { assertEquals, assertThrows } from "@std/assert";
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
