'use client';

import Band from '@/components/Band';
import { colors } from '@/styles';
import LinkButton from '@/components/LinkButton';
import { RotateCw } from 'lucide-react';
import { keyframes } from '@emotion/react';

const spin = keyframes`
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
`;

export default function Loading() {
  return (
    <div css={{ height: '100vh' }}>
      <Band outerCSS={{ background: colors.white }}>
        <h1>RECENT PROJECTS</h1>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <RotateCw css={{ animation: `${spin} 1s` }} /> <h1>LOADING...</h1>
        </div>
      </Band>
      <Band innerCSS={{ display: 'flex', justifyContent: 'center' }}>
        <LinkButton buttonCSS={{ fontSize: '2em' }} href="/contact">
          LET&apos;S TALK!
        </LinkButton>
      </Band>
    </div>
  );
}
