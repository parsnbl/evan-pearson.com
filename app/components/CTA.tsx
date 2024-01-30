'use client'
import React from "react";
import { css } from '@emotion/react'
import Link from "next/link";

import Band from "@/components/Band";
import { roboto_condensed } from '@/fonts';


const CTA = () => {
  return (
    <Band>
      <h2 className={roboto_condensed.className} css={{ textAlign: 'center'}}>
        <Link href='/contact'>LET'S TALK!</Link>
      </h2>
    </Band>
  );
};

export default CTA;