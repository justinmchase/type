import { Type, type } from "./type.ts";

export function isArray(value: unknown): value is unknown[] {
  return type(value).t === Type.Array;
}

export function assertArrayType(type: Type): asserts type is Type.Array {
  if (type !== Type.Array) {
    throw new TypeError(`Type ${type} is not Array`);
  }
}

export function assertArray(value: unknown): asserts value is unknown[] {
  const { t } = type(value);
  assertArrayType(t);
}
