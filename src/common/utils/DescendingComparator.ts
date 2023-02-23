export function descendingComparator<T>(firstValue: T, secondValue: T, orderBy: keyof T) {
  if (secondValue[orderBy] < firstValue[orderBy]) {
    return -1;
  }
  if (secondValue[orderBy] > firstValue[orderBy]) {
    return 1;
  }
  return 0;
}
