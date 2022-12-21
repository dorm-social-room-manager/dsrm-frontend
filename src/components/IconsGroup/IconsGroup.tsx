import { IconLink } from '../IconLink/IconLink';
import { IconsGroupProps } from './IconsGroup.types';
import styles from './IconsGroup.module.scss';

export function IconsGroup({ icons }: IconsGroupProps) {
  return (
    <ul className={styles.list}>
      {icons.map((icon, idx) => {
        return (
          <li key={idx}>
            <IconLink {...icon}></IconLink>
          </li>
        );
      })}
    </ul>
  );
}
