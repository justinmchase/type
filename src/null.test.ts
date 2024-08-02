import { assertEquals, assertThrows } from "@std/assert";
import { assertNull, assertNullType, isNull } from "./null.ts";
import { type } from "./type.ts";

Deno.test({
  name: "null",
  fn: () => {
    const value: unknown = null;
    const [t, v] = type(value);
    assertNullType(t);
    assertNull(v);
    assertEquals(true, isNull(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not null",
  fn: () => {
    assertThrows(() => assertNull({}));
  },
});
