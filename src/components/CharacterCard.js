import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  max-width: 15rem;
  width: 19%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1rem;
  img {
    width: 100%;
    border-bottom: 1px solid black;
  }
`;
const Title = styled.div`
  border-bottom: 1px solid black;
  background-color: white;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
`;

const Body = styled.div`
  padding: 1rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 0 0 5px 5px;
`;

export default function CharacterCard({ character }) {
  return (
    <Style>
      <Title>{character.name}</Title>
      <img src={character.image} alt={character.name} />
      <Body>
        {character.species +
          ' ' +
          character.status +
          ' ' +
          character.location.name}
      </Body>
    </Style>
  );
}
