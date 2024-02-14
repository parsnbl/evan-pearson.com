'use client';

import React, { useRef, useEffect, Suspense } from 'react';
import { css, keyframes } from '@emotion/react';
import { Laugh } from 'lucide-react';
import { colors } from '@/styles';

import { Dimensions } from '@/hooks/useDimensions';
import { smileCoords, addSafeZone } from './smile.ts'




interface IconMatCustomization {
  dim: Dimensions;
}

type Coords = [number, number]
// 26 x 26
type Range = {rStart: number, rEnd: number, cStart: number, cEnd: number }





const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const buildLaugh = (r, c, color = colors.black, size = 24, padding = 1, strokeWidth = 2) => {
  return (
    <div
      css={{
        padding: `${padding}px`,
        gridRow: `${r}/span 1`,
        gridColumn: `${c}/span 1`,
        animation: `${fadeIn} .5s ease`
      }}
      key={`iconMat_icon_${r}_${c}`}
    >
      <Laugh color={color} size={size} strokeWidth={strokeWidth}/>
    </div>
  );
};

const IconMat = ({ dim }: IconMatCustomization) => {
  const numberOfCols = Math.floor(dim.width / 26) + 2;
  const numberOfRows = Math.floor(dim.height / 26) + 2;


  const dGrid = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numberOfCols}, 26px)`,
    gridTemplateRows: `repeat(${numberOfRows}, 26px)`,
    left: '-44px',
    top: '-44px',
    zIndex: -100,
    position: 'absolute',
    '& svg': {
      padding: '1px',
    },
  };
  let rowLowerBound = 4;
  let rowUpperBound = 21;
  let colLowerBound = 34;
  let colUpperBound = 72;

  const safeSmileCoords = addSafeZone(smileCoords, rowLowerBound, colLowerBound, rowUpperBound, colUpperBound)

  const coordMatch = (r, c, coordsArr) => {
    return coordsArr.some(([arrR, arrC]) => {
      return arrR === r && arrC === c;
    })
  }


  const buildIcons = (coords?: Coords[]): React.ReactNode[] => {
    const icons = []
    for (let r = 1; r <= numberOfRows; r++) {
      for (let c = 1; c <= numberOfCols; c++) {
        let elem;
        if (coords) {
          if (coordMatch(r, c, coords)) {
            elem = buildLaugh(r, c, '#3EB489', 24, 1, 2)
          } else {
            elem = buildLaugh(r, c, colors.black, 24, 1, 2);
          }
        } else {
          elem = buildLaugh(r, c, colors.black, 24, 1, 2);
        }
        icons.push(elem);
      }
    }
    return icons;
  }
  

  

  const icons = buildIcons();

  return(
  <div css={dGrid}>
      {icons}
  </div>
    );
};
export default IconMat;
