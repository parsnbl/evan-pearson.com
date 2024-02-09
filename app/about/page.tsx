'use client'
import React from "react";
import { css } from '@emotion/react';

import { Star } from "lucide-react";
import { colors, roboto_condensed } from "@/styles";

import Band from "@/components/Band";
import Blurb from '@/about/components/Blurb';
import Languages from '@/about/components/Languages';
import CTA from '@/components/CTA';
import { 
  Frontend, 
  Backend, 
  Data, 
  Martech, 
  Cloud, 
  Growth 
} from '@/about/components/Skills';

import SkillSWrapper from "./components/SkillsWrapper";



const Page = () => {

  const twoColumn = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    height: '100%' ,
  });

  const skillsHeader = css({
    display: 'flex',
    alignItems: 'center',
    padding: '0em',
    margin: '0em',
    borderBottom: `1px solid ${colors.black}`,
    '& h1': {
      margin: '0px'
    }
  });

  return (
        <>
          <Blurb />
          <Band outerCSS={{paddingTop: '0px', paddingBottom: '0px'}}>
            <div css={skillsHeader} className={roboto_condensed.className} style={{margin: '0px', padding: '0px'}}>
              <Star /><h1>THINGS I'M GOOD AT</h1>
            </div>
          </Band>
          <Languages />
          <SkillSWrapper>
            <Frontend />
            <Backend />
            <Data />
            <Martech />
            <Cloud />
            <Growth />
          </SkillSWrapper>
          <CTA />
        </>
  );
}

export default Page;