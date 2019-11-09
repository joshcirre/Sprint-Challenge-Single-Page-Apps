import React from 'react';
import { Route } from 'react-router-dom';
import TabNav from './components/TabNav';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import SearchForm from './components/SearchForm';
import { ThemeProvider } from 'emotion-theming';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path='/' exact component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/search' component={SearchForm} />
    </main>
  );
}
