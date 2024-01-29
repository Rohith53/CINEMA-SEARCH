import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Card from '../Components/Card';

const Search = ({ apiPath }) => {
  const { searchparams } = useSearchParams();
  const queryTerm = searchparams?.get("q"); // Use optional chaining here

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap '>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
