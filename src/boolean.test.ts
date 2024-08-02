import { assertEquals, assertThrows } from "@std/assert";
import { assertBoolean, assertBooleanType, isBoolean } from "./boolean.ts";
import { type } from "./type.ts";

Deno.test({
  name: "boolean",
  fn: () => {
    const value: unknown = true;
    const [t, v] = type(value);
    assertBooleanType(t);
    assertBoolean(v);
    assertEquals(true, isBoolean(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not boolean",
  fn: () => {
    assertThrows(() => assertBoolean({}));
  },
});
