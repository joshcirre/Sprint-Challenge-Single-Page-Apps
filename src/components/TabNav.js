import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Style = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  border-bottom: 1px solid black;
  background-color: lightgray;
  &.active {
    background-color: white;
    border-radius: 5px 5px 0 0;
    border: 1px solid black;
    border-bottom: 0;
  }
`;

export default function TabNav() {
  return (
    <Style>
      <StyledLink exact to='/'>
        Home
      </StyledLink>
      <StyledLink to='/characters'>Characters</StyledLink>
      <StyledLink to='/locations'>Locations</StyledLink>
      <StyledLink to='/episodes'>Episodes</StyledLink>
      <StyledLink to='/search'>Search</StyledLink>
    </Style>
  );
}
