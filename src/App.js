import React from 'react';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <Route path='/' exact component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/search' component={SearchForm} />
    </main>
  );
}
