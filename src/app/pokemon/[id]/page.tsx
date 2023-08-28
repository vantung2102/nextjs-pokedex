'use client';
import Link from 'next/link';

import { Profile, Slider, Stats } from 'components';

import './page.scss';
import { Fragment } from 'react';

const Page = () => {
  return (
    <div className='pokemon-detail-contents'>
      <div className='pokemon-detail'>
        <div className='pokemon-detail__header'>
          <div className='pokemon-detail__header__inner'>
            <span>
              <Link href='/'>PokeDex</Link>
            </span>
          </div>
        </div>

        <Fragment>
          <Slider />
        </Fragment>

        <Fragment>
          <Profile />
        </Fragment>

        <Fragment>
          <Stats />
        </Fragment>

        <div className='pokemon-detail__style'></div>

        <div className='pokemon-detail__evolutions'></div>

        <div className='pokemon-detail__back'></div>
      </div>
    </div>
  );
};

export default Page;
