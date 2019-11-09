import React from 'react';
import { Box } from '@chakra-ui/core';

// const Style = styled.div`
//   max-width: 15rem;
//   width: 19%;
//   border: 1px solid black;
//   border-radius: 5px;
//   margin: 1rem;
//   img {
//     width: 100%;
//     border-bottom: 1px solid black;
//   }
// `;
// const Title = styled.div`
//   border-bottom: 1px solid black;
//   background-color: white;
//   padding: 1rem;
//   border-radius: 5px 5px 0 0;
// `;

// const Body = styled.div`
//   padding: 1rem;
//   background-color: rgb(255, 255, 255, 0.7);
//   border-radius: 0 0 5px 5px;
// `;

export default function CharacterCard({ character }) {
  return (
    <Box maxW='sm' borderWidth='1px' rounded='lg' overflow='hidden'>
      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {character.name}
      </Box>
      <img src={character.image} alt={character.name} />
      <Box ml='2' color='gray.600' fontSize='sm'>
        {character.species +
          ' ' +
          character.status +
          ' ' +
          character.location.name}
      </Box>
    </Box>
  );
}
