import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Error.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Error.
 * @example
 * ```ts
 * isError(Type.Error); // true
 * isError(Type.Object); // false
 * ```
 * @category Guards
 */
export function isError(value: unknown): value is Error {
  return type(value)[0] === Type.Error;
}

/**
 * Asserts that a type is Error.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not an error.
 * @example
 * ```ts
 * assertErrorType(Type.Error); // OK
 * assertErrorType(Type.Object); // Throws: Type Object is not Error
 * ```
 * @category Assertion
 */
export function assertErrorType(type: Type): asserts type is Type.Error {
  if (type !== Type.Error) {
    throw new TypeError(`Type ${type} is not Error`);
  }
}

/**
 * Asserts that a value is an error.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not an error.
 * @example
 * ```ts
 * assertError(new Error()); // OK
 * assertError({}); // Throws: Type object is not Error
 * ```
 * @category Assertion
 */
export function assertError(value: unknown): asserts value is Error {
  const [t] = type(value);
  assertErrorType(t);
}
