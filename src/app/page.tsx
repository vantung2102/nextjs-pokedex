'use client';
import { Header } from 'components';
import useFetch from 'hooks/useFetch';
import { getPokeDex } from 'services';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import http from 'configs/http';
import axios from 'axios';
import { error } from 'console';

export default function Home() {
  const fetcher = async (url: string) => {
    await http
      .get(url)
      .then((response) => response.data)
      .then((error) => console.log(error));
  };

  const { data, error, isLoading, isValidating, mutate } = useFetch('/pokemon?limit=20&offset=0', getPokeDex);
  useEffect(() => {
    console.log('data', data);
    console.log('error', error);
    console.log('isLoading', isLoading);
    console.log('isValidating', isValidating);
    console.log('mutate', mutate);
  }, []);

  return (
    <>
      <Header />
      <main className=''>zane</main>
    </>
  );
}
