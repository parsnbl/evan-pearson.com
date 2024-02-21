/* @jsxImportSource react */

import { Wrapped } from '../../declarations';
import ClientWrapper from './ClientWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evan Pearson | Contact'
}

export default function Layout({ children }: Wrapped) {
  return (
    <ClientWrapper>
      {children}
    </ClientWrapper>
  );
}
