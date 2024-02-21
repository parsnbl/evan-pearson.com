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

const LinkButtonWrapper = css({
  '& a:hover': {
    outline: 'none',
  },
  '& a:active': {
    backgroundColor: colors.white,
    color: colors.black,
  },
});

const LinkButtonCSS = css({
  TextAlign: 'center',
  display: 'inline-block',
  border: '1px solid black',
  fontSize: '2em',
  color: colors.black,
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
});

const LinkButton = ({
  children,
  wrapperCSS,
  buttonCSS,
  href,
  ext = false,
}: LinkButtonProps) => {
  let linkProps = {};
  if (ext)
    linkProps = { ...linkProps, target: '_blank', rel: 'noreferrer noopener' };

  return (
    <div
      css={
        wrapperCSS ? css([LinkButtonWrapper, wrapperCSS]) : LinkButtonWrapper
      }
    >
      <Link href={href} {...linkProps}>
        <button
          css={buttonCSS ? css([LinkButtonCSS, buttonCSS]) : LinkButtonCSS}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
