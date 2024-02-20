'use client';

import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { colors } from '@/styles';
import { FullCSSInterpolation } from '../../declarations';

interface LinkButtonProps {
  children: React.ReactNode | React.ReactNode[];
  wrapperCSS?: FullCSSInterpolation;
  buttonCSS?: FullCSSInterpolation;
  href: string;
  ext?: boolean;
}

const LinkButton = ({
  children,
  wrapperCSS,
  buttonCSS,
  href,
  ext = false,
}: LinkButtonProps) => {
  let wrapper = {
    '& a:hover': {
      outline: 'none',
    },
    '& a:active': {
      backgroundColor: colors.white,
      color: colors.black,
    },
  };
  let button = {
    TextAlign: 'center',
    display: 'inline-block',
    border: '1px solid black',
    fontSize: '2em',
    fontFamily: 'Roboto Condensed',
    fontWeight: 'bolder',
    padding: '10px 20px',
    background: colors.white,
    ':active': {
      color: colors.white,
      backgroundColor: colors.black,
    },
    ':hover': {
      boxShadow: `8px 8px ${colors.pictonBlue}`,
    },
  };
  let linkProps = {};
  if (wrapperCSS) wrapper = Object.assign(wrapper, css);
  if (buttonCSS) button = Object.assign(button, buttonCSS);
  if (ext)
    linkProps = { ...linkProps, target: '_blank', rel: 'noreferrer noopener' };

  return (
    <div css={wrapper}>
      <Link href={href} {...linkProps}>
        <button css={button}>{children}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
