'use client';

import { iconBackground } from '@/styles';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      css={{
        ...iconBackground,
        marginTop: '56px',
        padding: '60px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'calc(731px + 4em)',
          minWidth: 'calc(320px - 4em)',
          fontSize: '16px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
