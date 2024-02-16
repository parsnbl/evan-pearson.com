'use client';

import React from 'react';
import { SerializedStyles } from '@emotion/react';


const twoColumn = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 335px)',
  gap: '1rem',
  height: '100%',
  placeItems: 'center',
  justifyContent: 'center',
};

interface multiWrapped {
  children: React.ReactNode;
  bandStyles?: SerializedStyles;
  columnStyles?: SerializedStyles;
}

const SkillsWrapper = ({ children, columnStyles }: multiWrapped) => {
  return (
    // <Band outerCSS={Object.assign({paddingTop: '0px'}, bandStyles)}>
    <div css={[twoColumn, columnStyles]}>{children}</div>
    // </Band>
  );
};

export default SkillsWrapper;
