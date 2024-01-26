'use client'
import React from "react";
import { css } from '@emotion/react'

import Band from "@/components/Band";
import { roboto_condensed } from '@/fonts';

const CTA = () => {
  return (
    <Band>
      <h2 className={roboto_condensed.className} css={{ textAlign: 'center'}}>
        LET'S TALK!
      </h2>
    </Band>
  );
};

export default CTA;