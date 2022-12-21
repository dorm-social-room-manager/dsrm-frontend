import { IconsGroupProps } from './IconsGroup.types';
import styles from './IconsGroup.module.scss';

export function IconsGroup(props: IconsGroupProps) {
  const listItems = [];
  for (let i = 0; i < props.icons.length; i++) {
    listItems.push(<li key={i}>{props.icons[i]}</li>);
  }

  return <ul className={styles.list}>{listItems}</ul>;
}
