import { IconLink } from '../IconLink/IconLink';
import { IconsGroupProps } from './IconsGroup.types';

export function IconsGroup({ icons }: IconsGroupProps) {
  return (
    <ul
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',

        gap: '2rem',
        justifyContent: 'center',
        listStyleType: 'none',

        marginBlockEnd: '0px',
        marginBlockStart: '0px',

        paddingInlineStart: '0px',
        textDecoration: 'none',
      }}
    >
      {icons.map((icon, idx) => {
        return (
          <li
            style={{ display: 'inline' }}
            key={idx}
          >
            <IconLink {...icon}></IconLink>
          </li>
        );
      })}
    </ul>
  );
}
