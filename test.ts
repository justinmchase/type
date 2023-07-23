import { assertEquals } from "std/assert/assert_equals.ts";
import { toString, Type, type } from "./mod.ts";

const resolveTests: [unknown, Type][] = [
  [null, Type.Null],
  [undefined, Type.Undefined],
  [BigInt(100), Type.BigInt],
  [true, Type.Boolean],
  [false, Type.Boolean],
  [() => {}, Type.Function],
  [0, Type.Number],
  [3.1459, Type.Number],
  [NaN, Type.Number],
  [Number.EPSILON, Type.Number],
  ["", Type.String],
  ["123", Type.String],
  ["true", Type.String],
  [Symbol("test"), Type.Symbol],
  [[1, 2, 3], Type.Array],
  [new Error("ok"), Type.Error],
  [{
    toString() {
      return "{}";
    },
  }, Type.Object],
];

Deno.test({
  name: "resolution",
  fn: async (ctx) => {
    for (const [value, expected] of resolveTests) {
      const { t, v } = type(value);
      await ctx.step({
        name: `[${toString(v)}]: ${expected}`,
        fn: () => {
          assertEquals(t, expected);
        },
      });
    }
  },
});
