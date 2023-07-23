import { Type, type } from "./type.ts";

// deno-lint-ignore ban-types
export function isFunction(value: unknown): value is Function {
  return type(value).t === Type.Function;
}

export function assertFunctionType(type: Type): asserts type is Type.Function {
  if (type !== Type.Function) {
    throw new TypeError(`Type ${type} is not Function`);
  }
}

// deno-lint-ignore ban-types
export function assertFunction(value: unknown): asserts value is Function {
  const { t } = type(value);
  assertFunctionType(t);
}
