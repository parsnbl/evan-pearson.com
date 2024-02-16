'use client';

import { Wrapped } from '../../declarations';

const MinimalWrapper = ({ children }: Wrapped) => {
  return (
    <main
      css={{
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: '70px',
      }}
    >
      {children}
    </main>
  );
};

export default MinimalWrapper;
