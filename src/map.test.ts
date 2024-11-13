import { assertEquals, assertThrows } from "@std/assert";
import { assertMap, assertMapType, isMap } from "./map.ts";
import { type } from "./type.ts";

Deno.test({
  name: "map",
  fn: () => {
    const value: unknown = new Map();
    const [t, v] = type(value);
    assertMapType(t);
    assertMap(v);
    assertEquals(true, isMap(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not map",
  fn: () => {
    assertThrows(() => assertMap({}));
  },
});
