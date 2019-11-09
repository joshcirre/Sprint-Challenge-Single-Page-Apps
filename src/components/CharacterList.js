import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      console.log('this is response', response.data.results);
      setCharacterData(response.data.results);
    });
    // .catch(error => console.log(error.response)
  }, []);
  console.log('this is characterlist', characterData);
  return (
    <>
      <nav>
        <Link to={'/character-list/search'}>Search</Link>
      </nav>

      <Container className='character-list'>
        <Row className='entry'>
          {characterData.map(charac => {
            return (
              <CharacterCard
                key={charac.id}
                name={charac.name}
                status={charac.status}
                image={charac.image}
                species={charac.species}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}
