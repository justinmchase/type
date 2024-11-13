import { Type, type } from "./type.ts";

/**
 * Returns true if the type is Date.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Date.
 * @example
 * ```ts
 * isDate(new Date()); // true
 * isDate({}); // false
 * ```
 * @category Guards
 */
export function isDate(value: unknown): value is Date {
  return type(value)[0] === Type.Date;
}

/**
 * Asserts that a type is Date.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not a Date.
 * @example
 * ```ts
 * assertDateType(Type.Date); // OK
 * assertDateType(Type.Object); // Throws: Type Object is not Date
 * ```
 * @category Assertion
 */
export function assertDateType(type: Type): asserts type is Type.Date {
  if (type !== Type.Date) {
    throw new TypeError(`Type ${type} is not Date`);
  }
}

/**
 * Asserts that a value is a Date.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not a Date.
 * @example
 * ```ts
 * assertDate(new Date()); // OK
 * assertDate({}); // Throws: Type object is not Date
 * ```
 * @category Assertion
 */
export function assertDate(value: unknown): asserts value is Date {
  const [t] = type(value);
  assertDateType(t);
}
