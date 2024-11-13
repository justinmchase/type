import { assertEquals, assertThrows } from "@std/assert";
import { assertDate, assertDateType, isDate } from "./date.ts";
import { type } from "./type.ts";

Deno.test({
  name: "date",
  fn: () => {
    const value: unknown = new Date();
    const [t, v] = type(value);
    assertDateType(t);
    assertDate(v);
    assertEquals(true, isDate(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not date",
  fn: () => {
    assertThrows(() => assertDate({}));
  },
});
