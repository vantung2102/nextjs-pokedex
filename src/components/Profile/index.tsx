import clsx from 'clsx';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import styles from './profile.module.scss';
import { pokemonBg, pokemonCircleBg, pokemon, male, female } from 'assets';

type Props = {};

const Profile = (props: Props) => {
  const { profile, left, right, main, item, title, value } = styles;

  return (
    <Box className={clsx(profile, 'absolute', 'w-full', 'z-20', 'top-0')}>
      <Box pos='relative'>
        <Box className={clsx(left, 'absolute', 'w-1/4')}>
          <Fragment>
            <Text className={clsx(title, 'w-2/3', 'text-center', 'text-5xl')}>Type</Text>
            <Flex className='flex-wrap'>
              <Box className={clsx(item, 'grass')}>
                <Link href='/'>
                  <Text>Glass</Text>
                </Link>
              </Box>

              <Box className={clsx(item, 'poison')}>
                <Link href='/'>
                  <Text>Poison</Text>
                </Link>
              </Box>
            </Flex>
          </Fragment>

          <Box className={styles.weakness}>
            <Text className={clsx(title, 'w-2/3', 'text-center')}>Weakness</Text>
            <Flex className='flex-wrap'>
              <Box className={clsx(item, 'grass')}>
                <Link href='/'>
                  <Text>Glass</Text>
                </Link>
              </Box>

              <Box className={clsx(item, 'grass')}>
                <Link href='/'>
                  <Text>Poison</Text>
                </Link>
              </Box>

              <Box className={clsx(item, 'grass')}>
                <Link href='/'>
                  <Text>Glass</Text>
                </Link>
              </Box>

              <Box className={clsx(item, 'grass')}>
                <Link href='/'>
                  <Text>Glass</Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box className={main}>
          <Box className='relative w-full'>
            <Image
              alt='back'
              src={pokemonBg.src}
              className={clsx(styles.back, 'w-full', 'h-auto')}
            ></Image>

            <Image
              alt='blur'
              src={pokemonCircleBg.src}
              className={clsx(styles.blur, 'absolute', 'inset-x-0', 'h-auto', 'w-2/3')}
            ></Image>

            <Image
              alt='front'
              src={pokemon.src}
              className={clsx(styles.front, 'absolute', 'inset-x-0', 'h-auto', 'w-2/3')}
            ></Image>
          </Box>
        </Box>

        <Box className={clsx(right, 'absolute', 'h-full', 'top-0', 'right-0')}>
          <Box className={clsx(styles.info, 'relative', 'text-left')}>
            <Box className={clsx(styles.height, 'absolute')}>
              <Text className='text-4xl'>Height</Text>
              <Text className={value}>115kg</Text>
            </Box>

            <Box className={clsx(styles.category, 'absolute')}>
              <Text className='text-4xl'>Category</Text>
              <Text className={value}>1.0 m</Text>
            </Box>

            <Box className={clsx(styles.weight, 'absolute')}>
              <Text className='text-4xl'>Weight</Text>
              <Text className={value}>1.0 m</Text>
            </Box>

            <Box className={clsx(styles.gender, 'absolute')}>
              <Text className='text-4xl'>Gender</Text>
              <Flex className={clsx(value, 'items-center', 'justify-around')}>
                <Image
                  alt='male'
                  src={male.src}
                  className='w-8 h-8'
                />
                <Fragment>/</Fragment>
                <Image
                  alt='female'
                  src={female.src}
                  className='w-8 h-8'
                />
              </Flex>
              <div className={value}></div>
            </Box>

            <Box className={clsx(styles.abilities, 'absolute')}>
              <Text className='text-4xl'>Abilities</Text>
              <Text className={value}>1.0 m</Text>
            </Box>

            <Box className={clsx(styles.location, 'absolute')}>
              <Text className='text-4xl'>Location</Text>
              <Text className={value}>Kanto</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
