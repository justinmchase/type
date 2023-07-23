import { Type, type } from "./type.ts";

export function isNull(value: unknown): value is null {
  return type(value).t === Type.Null;
}

export function assertNullType(type: Type): asserts type is Type.Null {
  if (type !== Type.Null) {
    throw new TypeError(`Type ${type} is not Null`);
  }
}

export function assertNull(value: unknown): asserts value is null {
  const { t } = type(value);
  assertNullType(t);
}
