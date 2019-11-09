import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import EpisodeCard from './EpisodeCard';
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

export default function EpisodeList() {
  const [pages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [maxpage, setMaxpage] = useState(1);

  useEffect(() => {
    let exists = false;
    pages.forEach(page => {
      currentPage === page && (exists = true);
    });
    if (!exists) {
      Axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`)
        .then(res => {
          setMaxpage(res.data.info.pages);
          setEpisodes(list => [
            ...list,
            {
              next: res.data.info.next,
              previous: res.data.info.previous,
              results: res.data.results
            }
          ]);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <section className='episode-list grid-view'>
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
        {episodes[currentPage - 1] && episodes[currentPage - 1].results ? (
          episodes[currentPage - 1].results.map((episode, index) => {
            return <EpisodeCard key={index} episode={episode} />;
          })
        ) : (
          <div className='grid-view'>
            <Loader type='Watch' color='gray' height={300} width={300} />
          </div>
        )}
      </div>
    </section>
  );
}
