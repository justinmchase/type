import { Type, type } from "./type.ts";
import type { Func } from "./type.ts";

/**
 * Returns true if the type is Function.
 * @param value The value to check.
 * @returns {boolean} Returns true if the type is Function.
 * @example
 * ```ts
 * isFunction(Type.Function); // true
 * isFunction(Type.Object); // false
 * ```
 * @category Guards
 */
export function isFunction<T extends Func>(value: T): value is T {
  return type(value)[0] === Type.Function;
}

/**
 * Asserts that a type is Function.
 * @param type The type to check.
 * @throws {TypeError} Throws an error if the type is not an function.
 * @example
 * ```ts
 * assertFunctionType(Type.Function); // OK
 * assertFunctionType(Type.Object); // Throws: Type Object is not Function
 * ```
 * @category Assertion
 */
export function assertFunctionType(type: Type): asserts type is Type.Function {
  if (type !== Type.Function) {
    throw new TypeError(`Type ${type} is not Function`);
  }
}

/**
 * Asserts that a value is an function.
 * @param value The value to check.
 * @throws {TypeError} Throws an error if the value is not an function.
 * @example
 * ```ts
 * assertFunction([]); // OK
 * assertFunction({}); // Throws: Type object is not Function
 * ```
 * @category Assertion
 */
export function assertFunction<T extends Func>(
  value: unknown,
): asserts value is T {
  const [t] = type(value);
  assertFunctionType(t);
}
