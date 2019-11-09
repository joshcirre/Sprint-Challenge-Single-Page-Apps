import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1rem;
  padding: 0.2rem;
`;

export default function({ direction, currentPage, setCurrentPage, maxpage }) {
  const handleClick = () => {
    if (direction === 'previous') setCurrentPage(page => page - 1);
    if (direction === 'next') setCurrentPage(page => page + 1);
  };

  const isPreviousDisabled = direction === 'previous' && currentPage <= 1;
  const isNextDisabled = direction === 'next' && currentPage >= maxpage;
  return (
    <Button
      onClick={handleClick}
      disabled={isNextDisabled || isPreviousDisabled}
    >
      {direction}
    </Button>
  );
}
