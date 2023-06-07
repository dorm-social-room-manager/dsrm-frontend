import { IconsListItemStyled, IconsListStyled } from './IconsGroup.styled';
import { IconLink } from '../IconLink/IconLink';
import { IconsGroupProps } from './IconsGroup.types';

export function IconsGroup({ icons }: IconsGroupProps) {
  return (
    <IconsListStyled>
      {icons.map((icon, idx) => {
        return (
          <IconsListItemStyled key={idx}>
            <IconLink {...icon}></IconLink>
          </IconsListItemStyled>
        );
      })}
    </IconsListStyled>
  );
}
