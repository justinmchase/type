import { Type, type } from "./type.ts";

/**
 * Returns true if the type is BigInt.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is BigInt.
 * @example
 * ```ts
 * isBigIntType(Type.BigInt); // true
 * isBigIntType(Type.Object); // false
 * ```
 * @category Guards
 */
export function isBigInt(value: unknown): value is bigint {
  return type(value)[0] === Type.BigInt;
}

/**
 * Asserts that a type is BigInt.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not BigInt.
 * @example
 * ```ts
 * assertBigIntType(Type.BigInt); // OK
 * assertBigIntType(Type.Object); // Throws: Type Object is not BigInt
 * ```
 * @category Assertion
 */
export function assertBigIntType(type: Type): asserts type is Type.BigInt {
  if (type !== Type.BigInt) {
    throw new TypeError(`Type ${type} is not BigInt`);
  }
}

/**
 * Asserts that a value is a BigInt.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a BigInt.
 * @example
 * ```ts
 * assertBigInt(BigInt(1)); // OK
 * assertBigInt(1); // Throws: Type number is not BigInt
 * ```
 * @category Assertion
 */
export function assertBigInt(value: unknown): asserts value is bigint {
  const [t] = type(value);
  assertBigIntType(t);
}
