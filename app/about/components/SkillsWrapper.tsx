'use client'

import React from "react";
import { SerializedStyles, css } from '@emotion/react';


import Band from "@/components/Band";
import { StyledWrapped } from "../../../declarations";

const twoColumn = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  height: '100%' ,
};

interface multiWrapped {
  children: React.ReactNode,
  bandStyles?: SerializedStyles,
  columnStyles?: SerializedStyles
}

const SkillsWrapper = ({children, bandStyles, columnStyles}: multiWrapped) => {

  return (
    <Band outerCSS={Object.assign({paddingTop: '0px'}, bandStyles)}>
      <div css={[twoColumn, columnStyles]}>
        {children}
      </div>
    </Band>
  );
};

export default SkillsWrapper;