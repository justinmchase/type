import { assertEquals, assertThrows } from "@std/assert";
import {
  assertUndefined,
  assertUndefinedType,
  isUndefined,
} from "./undefined.ts";
import { type } from "./type.ts";

Deno.test({
  name: "undefined",
  fn: () => {
    const value: unknown = undefined;
    const [t, v] = type(value);
    assertUndefinedType(t);
    assertUndefined(v);
    assertEquals(true, isUndefined(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not undefined",
  fn: () => {
    assertThrows(() => assertUndefined({}));
  },
});
