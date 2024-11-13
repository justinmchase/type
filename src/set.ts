import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Set.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Set.
 * @example
 * ```ts
 * isSet(new Set()); // true
 * isSet({}); // false
 * ```
 * @category Guards
 */
export function isSet(value: unknown): value is Set<unknown> {
  return type(value)[0] === Type.Set;
}

/**
 * Asserts that a type is Set.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not a Set.
 * @example
 * ```ts
 * assertSetType(Type.Set); // OK
 * assertSetType(Type.Object); // Throws: Type Object is not Set
 * ```
 * @category Assertion
 */
export function assertSetType(type: Type): asserts type is Type.Set {
  if (type !== Type.Set) {
    throw new TypeError(`Type ${type} is not Set`);
  }
}

/**
 * Asserts that a value is a Set.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a Set.
 * @example
 * ```ts
 * assertSet(new Set()); // OK
 * assertSet({}); // Throws: Type object is not Set
 * ```
 * @category Assertion
 */
export function assertSet(value: unknown): asserts value is Set<unknown> {
  const [t] = type(value);
  assertSetType(t);
}
