import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import LocationCard from './LocationCard';
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

export default function LocationList() {
  const [pages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [locations, setLocations] = useState([]);
  const [maxpage, setMaxpage] = useState(1);

  useEffect(() => {
    let exists = false;
    pages.forEach(page => {
      currentPage === page && (exists = true);
    });
    if (!exists) {
      Axios.get(`https://rickandmortyapi.com/api/location/?page=${currentPage}`)
        .then(res => {
          setMaxpage(res.data.info.pages);
          setLocations(list => [
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
    } // eslint-disable-next-line
  }, [currentPage]);

  return (
    <section className='locations-list grid-view'>
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
        {locations[currentPage - 1] && locations[currentPage - 1].results ? (
          locations[currentPage - 1].results.map((location, index) => {
            return <LocationCard key={index} location={location} />;
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
