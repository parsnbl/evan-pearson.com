'use client';

import React from 'react';
import { FullCSSInterpolation } from '../../declarations';
import { css } from '@emotion/react';

const bandOuter = css({
  minHeight: 'fit-content',
  boxSizing: 'border-box',
});

const bandInner = css({
  padding: '1em 2em 1em 2em',
  width: '100%',
  height: '100%',
});

interface BandCustomization {
  children: React.ReactNode;
  outerCSS?: FullCSSInterpolation;
  innerCSS?: FullCSSInterpolation;
}

const Band = ({ children, outerCSS, innerCSS }: BandCustomization) => {
  const outerBandCSS = css(outerCSS ? [bandOuter, outerCSS] : bandOuter);
  const innerBandCSS = css(innerCSS ? [bandInner, innerCSS] : bandInner);

  return (
    <div css={outerBandCSS}>
      <div css={innerBandCSS}>{children}</div>
    </div>
  );
};

export default Band;
