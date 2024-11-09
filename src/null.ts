import { Type, type } from "./type.ts";

/**
 * Checks if a value is null.
 * @param value The value to check.
 * @returns {boolean} Returns true if the value is null.
 * @example
 * ```ts
 * isNull(null); // true
 * isNull({}); // false
 * ```
 * @category Guards
 */
export function isNull(value: unknown): value is null {
  return type(value)[0] === Type.Null;
}

/**
 * Asserts that a given type is Type.Null.
 * @param type The type to check.
 * @throws {TypeError} If the type is not Type.Null.
 * @example
 * ```ts
 * assertNullType(Type.Null); // OK
 * assertNullType(Type.Object); // Throws: Type Object is not Null
 * ```
 * @category Assertion
 */
export function assertNullType(type: Type): asserts type is Type.Null {
  if (type !== Type.Null) {
    throw new TypeError(`Type ${type} is not Null`);
  }
}

/**
 * Asserts that a value is null.
 * @param value The value to check.
 * @throws {TypeError} If the value is not null.
 * @example
 * ```ts
 * assertNull(null); // OK
 * assertNull({}); // Throws: Type object is not Null
 * ```
 * @category Assertion
 */
export function assertNull(value: unknown): asserts value is null {
  const [t] = type(value);
  assertNullType(t);
}
