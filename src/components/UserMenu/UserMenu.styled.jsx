import styled from 'styled-components';

export const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Span = styled.span`
font-weight: 700;
margin-right: 12px;
`;

export const LogoutStyled = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 4px;
  border: none;
  background-color: darkorange;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
    &:hover, &:focus {
    opacity: 1;
  }
`;