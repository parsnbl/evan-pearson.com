'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { colors, lightBorder, iconBackground } from '@/styles';
import CallbackButton from './components/CallbackButton';
import { AlertTriangle } from 'lucide-react';


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      css={{
        ...iconBackground,
        marginTop: '60px',
        padding: '60px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          border: lightBorder,
          boxShadow: '1px 1px 3px lightgray',
        }}
      >
        <div
          css={{
            background: colors.white,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <h1><AlertTriangle />&nbsp;Error</h1>
          <h2>Wait, this wasn&apos;t supposed to happen...</h2>
          <CallbackButton onClick={()=> reset()}>
            TRY AGAIN?
          </CallbackButton>
        </div>
      </div>
    </div>
  );
}
