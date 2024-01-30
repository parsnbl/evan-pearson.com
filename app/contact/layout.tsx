'use client'

import React from 'react';


import MinimalWrapper from '@/components/MinimalWrapper';
import { Wrapped } from '../../declarations';


export default function Layout({children}: Wrapped) {
  return (
  <MinimalWrapper>
    {children}
  </MinimalWrapper>
  );
}