import { Data } from '../../common/types/TableTypes.types';
import { SortingDirection } from './SortingDirection';

export function descendingComparator<T>(firstValue: T, secondValue: T, orderBy: keyof T) {
  if (secondValue[orderBy] < firstValue[orderBy]) {
    return -1;
  }
  if (secondValue[orderBy] > firstValue[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof Data>(
  order: SortingDirection,
  orderBy: Key
): (firstValue: { [key in Key]: number | string }, secondValue: { [key in Key]: number | string }) => number {
  return order === SortingDirection.DESC
    ? (firstValue, secondValue) => {
        return descendingComparator(firstValue, secondValue, orderBy);
      }
    : (firstValue, secondValue) => {
        return -descendingComparator(firstValue, secondValue, orderBy);
      };
}
