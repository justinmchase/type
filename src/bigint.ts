import { Type, type } from "./type.ts";

export function isBigInt(value: unknown): value is bigint {
  return type(value)[0] === Type.BigInt;
}

export function assertBigIntType(type: Type): asserts type is Type.BigInt {
  if (type !== Type.BigInt) {
    throw new TypeError(`Type ${type} is not BigInt`);
  }
}

export function assertBigInt(value: unknown): asserts value is bigint {
  const [t] = type(value);
  assertBigIntType(t);
}
