import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function TabNav() {
  return (
    <div>
      <Link exact to='/'>
        Home
      </Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/episodes'>Episodes</Link>
      <Link to='/search'>Search</Link>
    </div>
  );
}
