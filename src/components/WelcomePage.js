import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export default function WelcomePage() {
  return (
    <Style>
      <section className='welcome-page'>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className='main-img'
            src='https://i.redd.it/ty3piks4k0zz.jpg'
            alt='rick and morty image'
          />
        </header>
      </section>
    </Style>
  );
}
