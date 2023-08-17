'use client';
import React from 'react';
import { Application } from 'layouts/index';

type Props = { children: React.ReactNode };

export default function PokemonLayout({ children }: Props) {
  return <Application>{children}</Application>;
}
