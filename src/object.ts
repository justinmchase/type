import { Type, type } from "./type.ts";

export function isObject(value: unknown): value is Record<string, unknown> {
  return type(value)[0] === Type.Object;
}

export function assertObjectType(type: Type): asserts type is Type.Object {
  if (type !== Type.Object) {
    throw new TypeError(`Type ${type} is not Object`);
  }
}

export function assertObject(
  value: unknown,
): asserts value is Record<string, unknown> {
  const [t] = type(value);
  assertObjectType(t);
}
