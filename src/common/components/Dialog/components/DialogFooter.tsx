import styled from 'styled-components';

const DialogFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  width: 100%;
`;

export default DialogFooter;
