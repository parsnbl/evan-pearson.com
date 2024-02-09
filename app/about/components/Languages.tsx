'use client';
import React from "react";
import { css } from '@emotion/react';

import Band from "@/components/Band";
import {Terminal } from "lucide-react";
import { roboto_condensed, roboto_mono } from '@/styles';

const bandStyle = {
  paddingTop: '0px', 
  paddingBottom: '0px', 
  display: 'flex', 
  alignItems: 'center'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '0em 0em',
  width: '100%',
  '& h3': {
    margin: '0px'
  },
  '& p': {
    flexGrow: '1',
    textAlign: 'right',
    paddingRight: '1em'
  }
}

const Languages = () => {
  return (
    <Band outerCSS={bandStyle}>
      <div css={headerStyle} className={roboto_condensed.className}>
        <Terminal />
        <h3 style={{borderRight: '1px solid black', paddingRight: '.25em'}}>
          &nbsp;LANGUAGES 
        </h3>
        <p style={{paddingLeft: '.25em'}} className={roboto_mono.className}>JavaScript, TypeScript, Python 3</p>
      </div>
      
    </Band>
  );
};

export default Languages;