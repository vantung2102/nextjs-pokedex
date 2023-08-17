import React from 'react';
import { Header } from 'components';

type Props = { children: React.ReactNode };

const Application = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Application;
