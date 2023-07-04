import { useTheme } from 'styled-components';
import ArrowIcon from '../../../common/assets/icons/ArrowIcon';
import { WithStyle } from '../../../common/interfaces/components.interfaces';
import { UserResearchFormButtonContainer } from './UserResearchFormButton.styles';

export default function UserResearchFormButton({ style }: WithStyle) {
  const theme = useTheme();

  const handleClick = () =>
    window.open(
      'https://mb1n22472ic.typeform.com/to/Lw9dJfOz',
      '_blank',
      'noopener,noreferrer',
    );

  return (
    <UserResearchFormButtonContainer
      onClick={handleClick}
      variant="text"
      format="outline"
      size="sm"
      style={style}
    >
      Participate in our survey{' '}
      <ArrowIcon height={12} style={{ marginLeft: theme.spacing.xxs }} />
    </UserResearchFormButtonContainer>
  );
}
