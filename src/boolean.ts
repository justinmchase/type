import { Type, type } from "./type.ts";

export function isBoolean(value: unknown): value is boolean {
  return type(value).t === Type.Boolean;
}

export function assertBooleanType(type: Type): asserts type is Type.Boolean {
  if (type !== Type.Boolean) {
    throw new TypeError(`Type ${type} is not Boolean`);
  }
}

export function assertBoolean(value: unknown): asserts value is boolean {
  const { t } = type(value);
  assertBooleanType(t);
}
