import React from 'react';
import { Header } from 'components';

type Props = { children: React.ReactNode };

export const ApplicationLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
