'use client'

import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Band from '@/components/Band';
import Project from '@/components/Project';


import { Github, Linkedin } from 'lucide-react';

import { roboto_condensed, roboto_flex } from '@/fonts';

import { useFormik } from 'formik';

import { colors } from '@/styles';

import ContactForm from './components/ContactForm';


const MAX_SUBJECT_LENGTH = 140;
const MAX_BODY_LENGTH = 2083;




export default function Proto() {
  
  const bandStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  });


  return (
    <>
      <Band cssStyles={bandStyle}>
        <div css={{textAlign: 'start', width: '500px'}}>
          <div css={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '1em'}}>
            <h2 css={{margin: '0px', flexGrow: 1}}>CONTACT</h2>
            <div css={{borderRight: '1px solid black'}}>SOCIAL&nbsp;</div>
            <div>&nbsp;<Github /> <Linkedin /></div>
          </div>
          <p css={{margin: '0px', flexGrow: 1}}>Get in touch! I'm always interested in chatting freelance projects or collaboration opportunities.</p>
          
        </div>
      </Band>
      <ContactForm />
    </>    
    
  );
}