export interface Dictionary<T> {
  [key: string]: T;
}

export type AnyTuple = [...any];
export type AnyFunction = (...args: any[]) => any;

export type Awaitable<T> = Promise<T> | T;

export type Constructor<T> = new (...args: any[]) => T;