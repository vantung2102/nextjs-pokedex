'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { GiPokecog } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import styles from './header.module.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState<any>();

  return (
    <header className={styles.header}>
      <Link
        href={'/'}
        className={styles.logo}
      >
        <h1>
          <GiPokecog className={styles.icon__logo} />
          PokeDex Zane
        </h1>
      </Link>

      <div className={styles.search}>
        <input
          value={searchValue}
          id={styles.search}
          type='text'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className={styles.search__icon}>
          <FiSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
