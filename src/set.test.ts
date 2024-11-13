import { assertEquals, assertThrows } from "@std/assert";
import { assertSet, assertSetType, isSet } from "./set.ts";
import { type } from "./type.ts";

Deno.test({
  name: "set",
  fn: () => {
    const value: unknown = new Set();
    const [t, v] = type(value);
    assertSetType(t);
    assertSet(v);
    assertEquals(true, isSet(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not set",
  fn: () => {
    assertThrows(() => assertSet({}));
  },
});
