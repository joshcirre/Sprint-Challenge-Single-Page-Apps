import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import CharacterCard from './CharacterCard';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  background: white;
  border: 1px solid black;
  border-top: 0;
  form {
    width: 500px;
    background: white;
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
      margin: 0.5rem;
      padding: 12px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    button {
      border: 1px solid black;
      width: 100%;
      padding: 0.5rem;
      background-color: white;
      &:active {
        background-color: gray;
      }
      &:hover {
        background-color: lightgray;
      }
    }
  }
`;
const SearchList = styled.div``;

function SearchForm({ status, errors, touched, isSubmitting }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (status)
      setCharacters(existingCharacters => [...existingCharacters, ...status]);
  }, [status]);

  return (
    <Style>
      <Form>
        <Field
          type='text'
          placeholder='Type in the name of the character you are looking for...'
          name='name'
        />
        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </Form>
      {characters.length > 0 && (
        <SearchList className='grid-view'>
          {characters.map((character, index) =>
            index < 5 ? (
              <CharacterCard key={index} character={character} />
            ) : (
              index < 5 && (
                <div className='grid-view'>
                  <Loader type='Watch' color='gray' height={300} width={300} />
                </div>
              )
            )
          )}
        </SearchList>
      )}
    </Style>
  );
}

export default withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ''
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('Please type in a character name.')
  }),
  handleSubmit({ name }, { setStatus, resetForm, setSubmitting }) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(res => {
        setStatus(res.data.results);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(SearchForm);
