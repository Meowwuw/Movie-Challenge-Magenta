// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from './MovieDetails';

const movieMock = {
  title: 'Title',
  overview: 'Overview',
  backdrop_path: 'Backdrop_path.jpg',
  poster_path: 'Poster_path.jpg',
  genres: [{ name: 'Genre 1' }, { name: 'Genre 2' }],
  credits: {
    cast: []
  }
};

test('renderiza el componente MovieDetails', () => {
  const onSelectMock = jest.fn();

  const { getByText, getByAltText } = render(<MovieDetails movie={movieMock} onSelect={onSelectMock} />);

  expect(getByText(movieMock.title)).toBeInTheDocument();
  expect(getByText(movieMock.overview)).toBeInTheDocument();
  expect(getByAltText(movieMock.title)).toHaveAttribute('src', `https://image.tmdb.org/t/p/original/${movieMock.poster_path}`);
  movieMock.genres.forEach((genre) => {
    expect(getByText(genre.name)).toBeInTheDocument();
  });
});

test('llama onSelect  cuando se hace clic en el botón Agregar a la lista', () => {
  const onSelectMock = jest.fn();

  const { getByText } = render(<MovieDetails movie={movieMock} onSelect={onSelectMock} />);

  fireEvent.click(getByText('Añadir a la lista'));

  expect(onSelectMock).toHaveBeenCalled();
});
