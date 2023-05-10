export function descendingComparator<T>(recordA: T, recordB: T, fieldName: keyof T) {
  if (recordB[fieldName] < recordA[fieldName]) {
    return -1;
  }
  if (recordB[fieldName] > recordA[fieldName]) {
    return 1;
  }
  return 0;
}
