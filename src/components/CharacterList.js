import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import PageButton from './PageButton';

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 1rem;
  }
`;

export default function CharacterList() {
  const [pages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [maxpage, setMaxpage] = useState(1);

  useEffect(() => {
    let exists = false;
    pages.forEach(page => {
      currentPage === page && (exists = true);
    });
    if (!exists) {
      Axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      )
        .then(res => {
          setMaxpage(res.data.info.pages);
          setCharacters(list => [
            ...list,
            {
              next: res.data.info.next,
              previous: res.data.info.previous,
              maxpage: res.data.info.pages,
              results: res.data.results
            }
          ]);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <section className='character-list grid-view'>
      <Header>
        <h2>Current Page: {currentPage}</h2>
        <div>
          <PageButton
            direction='previous'
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <PageButton
            direction='next'
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxpage={maxpage}
          />
        </div>
      </Header>
      <div className='grid-view'>
        {characters[currentPage - 1] && characters[currentPage - 1].results ? (
          characters[currentPage - 1].results.map((character, index) => {
            return <CharacterCard key={index} character={character} />;
          })
        ) : (
          <div className='grid-view'>
            <Loader type='Rings' color='gray' height={300} width={300} />
          </div>
        )}
      </div>
    </section>
  );
}
