import { Type, type } from "./type.ts";

export function isSymbol(value: unknown): value is symbol {
  return type(value)[0] === Type.Symbol;
}

export function assertSymbolType(type: Type): asserts type is Type.Symbol {
  if (type !== Type.Symbol) {
    throw new TypeError(`Type ${type} is not Symbol`);
  }
}

export function assertSymbol(value: unknown): asserts value is symbol {
  const [t] = type(value);
  assertSymbolType(t);
}
