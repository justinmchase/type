import { Type, type } from "./type.ts";

/**
 * Checks if a value is an object.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is an Object
 * @example
 * ```ts
 * isObject({}); // true
 * isObject(null); // false
 * ```
 * @category Guards
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return type(value)[0] === Type.Object;
}

/**
 * Asserts that a given type is an object.
 * @param type The type to check.
 * @throws {TypeError} If the type is not an object.
 * @example
 * ```ts
 * assertObjectType(Type.Object); // OK
 * assertObjectType(Type.Null); // Throws: Type Null is not Object
 * ```
 * @category Assertion
 */
export function assertObjectType(type: Type): asserts type is Type.Object {
  if (type !== Type.Object) {
    throw new TypeError(`Type ${type} is not Object`);
  }
}

/**
 * Asserts that a value is an object.
 * @param value The value to check.
 * @throws {TypeError} If the value is not an object.
 * @example
 * ```ts
 * assertObject({}); // OK
 * assertObject(null); // Throws: Type null is not Object
 * ```
 * @category Assertion
 */
export function assertObject(
  value: unknown,
): asserts value is Record<string, unknown> {
  const [t] = type(value);
  assertObjectType(t);
}
