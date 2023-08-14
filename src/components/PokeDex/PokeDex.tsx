import { Skeleton } from '@chakra-ui/react';
import { useFetch } from 'hooks';
import React from 'react';
import { getPokeDex } from 'services/pokeDex';
import './pokeDex.scss';
import { Pokemon } from 'components';

export const PokeDex = () => {
  const endpoint = '/pokemon?limit=20&offset=0';
  const { data, error, isLoading, isValidating, mutate } = useFetch(endpoint, getPokeDex);

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className='pokeDex'>
      {data?.results?.map((pokemon: any, index: number) => (
        <Pokemon
          id={index + 1}
          name={pokemon.name}
        />
      ))}
    </div>
  );
};
