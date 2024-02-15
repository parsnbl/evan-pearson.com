'use client'
import React from "react";
import { css } from '@emotion/react'
import Link from "next/link";

import Band from "@/components/Band";
import { colors } from "@/styles";



const Button = ({wrapperCSS, buttonCSS, text }) => {
  let wrapper = {
    '& a:hover': {
      outline: 'none'
    },
    '& a:active': {
      backgroundColor: colors.white,
      color: colors.black
     }
  };
  let button = {
    textAlign: 'center',
    display: 'inline-block',
    border: '1px solid black',
    fontSize: '2em',
    fontFamily: 'Roboto Condensed',
    fontWeight: 'bolder',
    padding: '10px 20px',
    background: colors.white,
    ':active': {
      color: colors.white,
      backgroundColor: colors.black
    },
    ':hover': {
      boxShadow: `8px 8px ${colors.pictonBlue}`
    }
  }
  
  if (wrapperCSS) wrapper = Object.assign(wrapper, css);
  if (buttonCSS) button = Object.assign(button, buttonCSS);
  return (
    <div css={wrapper}>
      <Link href='/contact'>
        <button css={button}>
          {text}
        </button>
      </Link>
    </div>
  )
};

export default Button;