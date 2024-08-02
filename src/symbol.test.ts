import { assertEquals, assertThrows } from "@std/assert";
import { assertSymbol, assertSymbolType, isSymbol } from "./symbol.ts";
import { type } from "./type.ts";

Deno.test({
  name: "symbol",
  fn: () => {
    const value: unknown = Symbol();
    const [t, v] = type(value);
    assertSymbolType(t);
    assertSymbol(v);
    assertEquals(true, isSymbol(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not symbol",
  fn: () => {
    assertThrows(() => assertSymbol({}));
  },
});
