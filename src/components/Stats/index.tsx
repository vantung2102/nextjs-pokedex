import clsx from 'clsx';
import React, { Fragment } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { ball, ballOn } from 'assets';
import styles from './stats.module.scss';

type Props = {};

const Stats = (props: Props) => {
  const { stats, version, status, item, wrapper } = styles;
  return (
    <Box className={stats}>
      <Box className='relative w-full'>
        <Box className={clsx(version, 'absolute', 'p-9')}>
          <Flex>
            <Text className='text-5xl'>Version</Text>
            <Flex className={clsx(styles.icon, 'items-center', 'w-full')}>
              <Image
                alt='ball'
                src={ball.src}
              />

              <Image
                alt='ball'
                src={ballOn.src}
              />
            </Flex>
          </Flex>

          <Text className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et hic, sunt eos earum molestiae dolor ad
            modi. Pariatur voluptatibus excepturi consequuntur molestiae explicabo molestias laborum dolor ea? Quod,
            veniam?
          </Text>
        </Box>

        <Box className={status}>
          <div className={clsx(styles.title, 'absolute', 'text-5xl', 'p-1')}>
            <span>Stats</span>
          </div>

          <Flex className={clsx(styles.content, 'absolute', 'justify-evenly')}>
            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-red-500')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>HP</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-orange-400')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Attack</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-amber-300')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Defense</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-sky-500')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Sp. Attack</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-green-500')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Sp. Defense</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-pink-500')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Speed</Text>
            </Flex>

            <Flex className={wrapper}>
              <Flex className={clsx(item, 'bg-rose-500')}>
                <Text>100</Text>
              </Flex>
              <Text className='mt-8'>Total</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
