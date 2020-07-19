import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(localStorage.getItem(localStorageKey) || '');

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function MovieList() {
  const [value, setValue] = useStateWithLocalStorage('Movies');

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <p>Список фильмов:</p>
      <TextareaAutosize value={value} type="text" onChange={onChange} />
    </div>
  );
}

export default MovieList;
