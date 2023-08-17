'use client';
import React from 'react';
import { PokeDex } from 'components';
import { Application } from 'layouts';

export default function Home() {
  return (
    <Application>
      <PokeDex />
    </Application>
  );
}
