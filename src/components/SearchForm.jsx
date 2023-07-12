import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchKey);
  };

  return (
    <form className='buscador' onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Search'
        className='buscador-input'
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button type='submit' className='buscador-button'>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

export default SearchForm;
