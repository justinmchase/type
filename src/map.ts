import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Map.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Map.
 * @example
 * ```ts
 * isMap(new Map()); // true
 * isMap({}); // false
 * ```
 * @category Guards
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return type(value)[0] === Type.Map;
}

/**
 * Asserts that a type is Map.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not a Map.
 * @example
 * ```ts
 * assertMapType(Type.Map); // OK
 * assertMapType(Type.Object); // Throws: Type Object is not Map
 * ```
 * @category Assertion
 */
export function assertMapType(type: Type): asserts type is Type.Map {
  if (type !== Type.Map) {
    throw new TypeError(`Type ${type} is not Map`);
  }
}

/**
 * Asserts that a value is a Map.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a Map.
 * @example
 * ```ts
 * assertMap(new Map()); // OK
 * assertMap({}); // Throws: Type object is not Map
 * ```
 * @category Assertion
 */
export function assertMap(
  value: unknown,
): asserts value is Map<unknown, unknown> {
  const [t] = type(value);
  assertMapType(t);
}
