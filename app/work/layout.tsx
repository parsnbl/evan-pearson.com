/* @jsxImportSource react */

import ClientWrapper from './ClientWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evan Pearson | Work',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClientWrapper>{children}</ClientWrapper>;
}
