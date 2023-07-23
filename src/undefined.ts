import { Type, type } from "./type.ts";

export function isUndefined(value: unknown): value is undefined {
  return type(value)[0] === Type.Undefined;
}

export function assertUndefinedType(
  type: Type,
): asserts type is Type.Undefined {
  if (type !== Type.Undefined) {
    throw new TypeError(`Type ${type} is not Undefined`);
  }
}

export function assertUndefined(value: unknown): asserts value is undefined {
  const [t] = type(value);
  assertUndefinedType(t);
}
