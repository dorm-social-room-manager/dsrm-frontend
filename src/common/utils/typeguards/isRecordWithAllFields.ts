export function isRecordWithAllFields<T extends object>(record: T | null | undefined, keys: Array<keyof T>): record is Required<T> {
  if (record === undefined || record === null) {
    return false;
  }

  for (const key of keys) {
    if (!(key in record)) {
      return false;
    }
  }

  return true;
}
