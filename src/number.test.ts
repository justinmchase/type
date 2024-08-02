import { assertEquals, assertThrows } from "@std/assert";
import { assertNumber, assertNumberType, isNumber } from "./number.ts";
import { type } from "./type.ts";

Deno.test({
  name: "number",
  fn: () => {
    const value: unknown = 0.0;
    const [t, v] = type(value);
    assertNumberType(t);
    assertNumber(v);
    assertEquals(true, isNumber(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not number",
  fn: () => {
    assertThrows(() => assertNumber({}));
  },
});
