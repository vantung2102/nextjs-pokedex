import React from 'react';

type Props = {};

export const PokeDex = (props: Props) => {
  return (
    <div className='pokeDex'>
      <div className='poke__item'>
        <div className='poke__content'>
          <img
            src='/'
            alt=''
            className='poke__content-img'
          />
          <div className='poke__content-title'></div>
        </div>
      </div>
    </div>
  );
};
