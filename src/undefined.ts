import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Undefined.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Undefined.
 * @example
 * ```ts
 * isUndefined(Type.Undefined); // true
 * isUndefined(Type.Object); // false
 * ```
 * @category Guards
 */
export function isUndefined(value: unknown): value is undefined {
  return type(value)[0] === Type.Undefined;
}

/**
 * Asserts that a type is Undefined.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not undefined.
 * @example
 * ```ts
 * assertUndefinedType(Type.Undefined); // OK
 * assertUndefinedType(Type.Object); // Throws: Type Object is not Undefined
 * ```
 * @category Assertion
 */
export function assertUndefinedType(
  type: Type,
): asserts type is Type.Undefined {
  if (type !== Type.Undefined) {
    throw new TypeError(`Type ${type} is not Undefined`);
  }
}

/**
 * Asserts that a value is undefined.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not undefined.
 * @example
 * ```ts
 * assertUndefined(undefined); // OK
 * assertUndefined({}); // Throws: Type object is not Undefined
 * ```
 * @category Assertion
 */
export function assertUndefined(value: unknown): asserts value is undefined {
  const [t] = type(value);
  assertUndefinedType(t);
}
