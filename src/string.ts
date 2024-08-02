import { Type, type } from "./type.ts";

export function isString(value: unknown): value is string {
  return type(value)[0] === Type.String;
}

export function assertStringType(type: Type): asserts type is Type.String {
  if (type !== Type.String) {
    throw new TypeError(`Type ${type} is not String`);
  }
}

export function assertString(value: unknown): asserts value is string {
  const [t] = type(value);
  assertStringType(t);
}

export function toString(value: unknown): string {
  const [t, v] = type(value);
  switch (t) {
    case Type.Array:
      return v.toString();
    case Type.BigInt:
      return v.toString();
    case Type.Boolean:
      return `${v}`;
    case Type.Error:
      return v.toString();
    case Type.Function:
      return v.toString();
    case Type.Null:
      return "null";
    case Type.Number:
      return `${v}`;
    case Type.Object:
      return v.toString();
    case Type.String:
      return v;
    case Type.Symbol:
      return v.toString();
    case Type.Undefined:
      return "undefined";
  }
}
