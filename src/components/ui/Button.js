import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${props => props.theme.lightPurple};
  color: black;
  border: none;
  cursor:pointer;
  font-size: ${props => props.theme.s1};
  padding: 0.5rem 0.8rem;
  &:hover {
    color: white;
    background-color:${props => props.theme.purple};
  }
`

export default function Button({
  handleClick,
  children
}) {
  return (
    <StyledButton onClick={handleClick}>{children}</StyledButton>
  )
}