import { isObject } from './is-object';

export function updateObject<T extends {}>(currentState: T, update: RecursivePartial<T>): T {
  if (!update) {
    return currentState;
  }

  if (!currentState) {
    return update as unknown as T;
  }

  const res = { ...currentState };

  Object.keys(update).forEach((key) => {
    const useKey = key as keyof RecursivePartial<T>;
    const val = update[useKey];
    res[useKey] = isObject(val) ? updateObject(res[key], val) : (res[key] = val);
  });

  return res;
}
