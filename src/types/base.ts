export interface Dictionary<T> {
  [key: string]: T;
}

export type AnyTuple = [...any];
export type AnyFunction = (...args: any[]) => any;