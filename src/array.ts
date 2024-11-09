import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Array.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Array.
 * @example
 * ```ts
 * isArray(Type.Array); // true
 * isArray(Type.Object); // false
 * ```
 * @category Guards
 */
export function isArray(value: unknown): value is unknown[] {
  return type(value)[0] === Type.Array;
}

/**
 * Asserts that a type is Array.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not an array.
 * @example
 * ```ts
 * assertArrayType(Type.Array); // OK
 * assertArrayType(Type.Object); // Throws: Type Object is not Array
 * ```
 * @category Assertion
 */
export function assertArrayType(type: Type): asserts type is Type.Array {
  if (type !== Type.Array) {
    throw new TypeError(`Type ${type} is not Array`);
  }
}

/**
 * Asserts that a value is an array.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not an array.
 * @example
 * ```ts
 * assertArray([]); // OK
 * assertArray({}); // Throws: Type object is not Array
 * ```
 * @category Assertion
 */
export function assertArray(value: unknown): asserts value is unknown[] {
  const [t] = type(value);
  assertArrayType(t);
}
