import styled from 'styled-components';
import Typography from '../../components/Typography/Typography';

export const SnackbarMainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SnackbarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SnackbarTitle = styled(Typography)`
  margin-bottom: 4px;
`;
