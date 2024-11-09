import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Boolean.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Boolean.
 * @example
 * ```ts
 * isBoolean(true); // true
 * isBoolean(null); // false
 * ```
 * @category Guards
 */
export function isBoolean(value: unknown): value is boolean {
  return type(value)[0] === Type.Boolean;
}

/**
 * Asserts that a type is Boolean.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not Boolean.
 * @example
 * ```ts
 * assertBooleanType(Type.Boolean); // OK
 * assertBooleanType(Type.Object); // Throws: Type Object is not Boolean
 * ```
 * @category Assertion
 */
export function assertBooleanType(type: Type): asserts type is Type.Boolean {
  if (type !== Type.Boolean) {
    throw new TypeError(`Type ${type} is not Boolean`);
  }
}

/**
 * Asserts that a value is an boolean.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not an boolean.
 * @example
 * ```ts
 * assertBoolean(true); // OK
 * assertBoolean(null); // Throws: null object is not Boolean
 * ```
 * @category Assertion
 */
export function assertBoolean(value: unknown): asserts value is boolean {
  const [t] = type(value);
  assertBooleanType(t);
}
