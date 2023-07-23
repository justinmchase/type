import { Type, type } from "./type.ts";

export function isError(value: unknown): value is Error {
  return type(value).t === Type.Error;
}

export function assertErrorType(type: Type): asserts type is Type.Error {
  if (type !== Type.Error) {
    throw new TypeError(`Type ${type} is not Error`);
  }
}

export function assertError(value: unknown): asserts value is Error {
  const { t } = type(value);
  assertErrorType(t);
}
