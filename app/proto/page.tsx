'use client'

import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Band from '@/components/Band';
import Project from '@/components/Project';
import ProjectArray from '@/projects/components/ProjectsArray';


import { roboto_condensed, roboto_flex } from '@/styles';

import { useFormik } from 'formik';

import { colors } from '@/styles';


const MAX_SUBJECT_LENGTH = 140;
const MAX_BODY_LENGTH = 2083;




export default function Proto() {
  
  const bandStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
  };


  return (
    <>
      <ProjectArray />
    </>    
    
  );
}