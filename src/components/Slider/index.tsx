import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image } from '@chakra-ui/react';

import { leftBtn, rightBtn } from 'assets';

import styles from './slider.module.scss';

type Props = {};

const Slider = (props: Props) => {
  const { slider, wrapper, arrow, left, right, main } = styles;

  return (
    <Box className={slider}>
      <Flex className='items-center justify-between'>
        <div className={clsx(wrapper, styles['arrow-left'])}>
          <Link href=''>
            <Image
              src={leftBtn.src}
              className={clsx(arrow, left)}
            />
          </Link>
          <span className={clsx(styles['pokemon-info'], styles['left-id'])}>001</span>
          <span className={clsx(styles['pokemon-info'], styles['left-name'])}>Fushigisou</span>
        </div>

        <div className={main}>
          <p className={styles['main-id']}>001</p>
          <p className={styles['main-name']}>Fushigisou</p>
          <p className='m-6'></p>
        </div>

        <div className={clsx(wrapper, styles['arrow-right'])}>
          <Link href=''>
            <Image
              src={rightBtn.src}
              className={clsx(arrow, right)}
            />
          </Link>
          <span className={clsx(styles['pokemon-info'], styles['right-id'])}>001</span>
          <span className={clsx(styles['pokemon-info'], styles['right-name'])}>Fushigisou</span>
        </div>
      </Flex>
    </Box>
  );
};

export default Slider;
