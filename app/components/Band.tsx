'use client'

import React, { forwardRef } from 'react';
import { SerializedStyles, css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { colors, border, container } from '@/styles';

import { CSSInterpolation } from '@emotion/serialize'

import useDimensions, {Dimensions} from '@/hooks/useDimensions'
import { StyledWrapped } from '../../declarations';

import { CustomRef } from '@/hooks/useDimensions';

const bandOuter = {
  //border: '1px solid black',
  minHeight: 'fit-content',
  boxSizing: 'border-box',

}; 

const bandInner = {
  padding: '1em 2em 1em 2em',
  width: '100%',
  height: '100%'




}

interface BandCustomization {
  children: React.ReactNode
  outerCSS?: CSSInterpolation
  innerCSS?: CSSInterpolation,
  innerRef?: CustomRef,
  outerRef?: CustomRef,
}


const Band = ({children, outerCSS, innerCSS, innerRef, outerRef}: BandCustomization) => {
  
  const outerBandCSS = outerCSS ? {...bandOuter, ...outerCSS} : bandOuter;
  const innerBandCSS = innerCSS ? {...bandInner, ...innerCSS} : bandInner;

  return (
    <div ref={outerRef} css={outerBandCSS}>
      <div ref={innerRef} css={innerBandCSS}>
        {children}
      </div>
    </div>
  );
};



// const Band = forwardRef<EmotionJSX>(({children, outerCSS, innerCSS}: BandCustomization, ref) => {
  
//   const outerBandCSS = outerCSS ? {...bandOuter, ...outerCSS} : bandOuter;
//   const innerBandCSS = innerCSS ? {...bandInner, ...innerCSS} : bandInner;

//   return (
//     <div ref={ref} css={outerBandCSS}>
//       <div css={innerBandCSS}>
//         {children}
//       </div>
//     </div>
//   );
// });

// Band.displayName = "Band";

export default Band;