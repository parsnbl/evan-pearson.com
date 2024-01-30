import React from 'react';

import { SerializedStyles } from '@emotion/react';

export interface Wrapped {
  children: React.ReactNode
}

export interface StyledWrapped {
  children: React.ReactNode,
  cssStyles?: SerializedStyles | null
}