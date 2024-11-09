import { Type, type } from "./type.ts";

/**
 * Checks if a value is a number.
 * @param value The value to check.
 * @returns {boolean} Returns true if the value is a number.
 * @example
 * ```ts
 * isNumber(1); // true
 * isNumber({}); // false
 * ```
 * @category Guards
 */
export function isNumber(value: unknown): value is number {
  return type(value)[0] === Type.Number;
}

/**
 * Asserts that a given type is a number.
 * @param type The type to check.
 * @throws {TypeError} If the type is not a number.
 * @example
 * ```ts
 * assertNumberType(Type.Number); // OK
 * assertNumberType(Type.Object); // Throws: Type Object is not Number
 * ```
 * @category Assertion
 */
export function assertNumberType(type: Type): asserts type is Type.Number {
  if (type !== Type.Number) {
    throw new TypeError(`Type ${type} is not Number`);
  }
}

/**
 * Asserts that a value is a number.
 * @param value The value to check.
 * @throws {TypeError} If the value is not a number.
 * @example
 * ```ts
 * assertNumber(1); // OK
 * assertNumber({}); // Throws: Type object is not Number
 * ```
 * @category Assertion
 */
export function assertNumber(value: unknown): asserts value is number {
  const [t] = type(value);
  assertNumberType(t);
}
