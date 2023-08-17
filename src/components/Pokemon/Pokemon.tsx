import Link from 'next/link';
import React from 'react';

type Props = {
  id: number;
  name: string;
};

export const Pokemon = (props: Props) => {
  const { id, name } = props;
  console.log(props);

  const images = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

  return (
    <div className='pokeDex__item'>
      <div className='pokeDex__content'>
        <img
          src={images}
          className='pokeDex__content_img'
        />
        <div>
          <div className='pokeDex__content_name'>{name}</div>
          <div className='pokeDex__content_type'>
            <p className='type'>bug</p>
            <p className='type'>bug</p>
          </div>
          <Link
            href={`pokemon/${id}`}
            className='more'
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
