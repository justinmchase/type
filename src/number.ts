import { Type, type } from "./type.ts";

export function isNumber(value: unknown): value is number {
  return type(value).t === Type.Number;
}

export function assertNumberType(type: Type): asserts type is Type.Number {
  if (type !== Type.Number) {
    throw new TypeError(`Type ${type} is not Number`);
  }
}

export function assertNumber(value: unknown): asserts value is number {
  const { t } = type(value);
  assertNumberType(t);
}
