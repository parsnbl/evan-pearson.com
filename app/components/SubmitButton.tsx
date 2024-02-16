'use client';

import { css } from '@emotion/react';
import { colors } from '@/styles';
import { FullCSSInterpolation } from '../../declarations';

interface SubmitButtonProps {
  wrapperCSS?: FullCSSInterpolation
  buttonCSS?: FullCSSInterpolation
  text: string

}

const SubmitButton = ({ wrapperCSS, buttonCSS, text }: SubmitButtonProps) => {
  let wrapper = css({
    '& a:hover': {
      outline: 'none',
    },
    '& a:active': {
      backgroundColor: colors.white,
      color: colors.black,
    },
  });
  let button = css({
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
      backgroundColor: colors.black,
    },
    ':hover': {
      boxShadow: `8px 8px ${colors.pictonBlue}`,
    },
  });
  if (wrapperCSS) wrapper = css([wrapper, wrapperCSS])
  if (buttonCSS) button = css([button, buttonCSS])
  return (
    <div css={wrapper}>
      <button type="submit" css={button}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
