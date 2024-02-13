'use client';

import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { Laugh } from 'lucide-react';
import { colors } from '@/styles';

import { Dimensions } from '@/hooks/useDimensions';

interface IconMatCustomization {
  dim: Dimensions;
}

// 26 x 26

const buildLaugh = (r, c, color = colors.black, size = 24, padding = 1, strokeWidth = 2) => {
  return (
    <div
      css={{
        padding: `${padding}px`,
        gridRow: `${r}/span 1`,
        gridColumn: `${c}/span 1`,
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
  const icons = [];

  let rowLowerBound = 4;
  let rowupperBound = 21;
  let colLowerBound = 34;
  let colUpperBound = 72;

  const coordsOutline = [
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
    [0, 12],
    [0, 13],
    [1, 3],
    [1, 4],
    [1, 13],
    [1, 14],
    [2, 2],
    [2, 3],
    [2, 14],
    [2, 15],
    [3, 1],
    [3, 2],
    [3, 15],
    [3, 16],
    [4, 0],
    [4, 1],
    [4, 16],
    [4, 17],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
    [13, 0],
    [13, 1],
    [14, 1],
    [14, 2],
    [15, 2],
    [15, 3],
    [16, 3],
    [16, 4],
    [17, 4],
    [17, 5],
    [17, 6],
    [17, 7],
    [17, 8],
    [17, 9],
    [17, 10],
    [17, 11],
    [17, 12],
    [17, 13],
    [5, 17],
    [5, 17],
    [6, 17],
    [7, 17],
    [8, 17],
    [9, 17],
    [10, 17],
    [11, 17],
    [12, 17],
    [13, 17],
    [16, 13],
    [16, 14],
    [15, 14],
    [15, 15],
    [14, 15],
    [14, 16],
    [13, 16],
    [13, 17],
  ];

  const coordsEyes = [
    [5, 5],
    [5, 6],
    [6, 5],
    [6, 6],
    [5, 11],
    [6, 11],
    [5, 12],
    [6, 12],
  ];

  const coordsSmile = [
    [9, 3],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8],
    [9, 9],
    [9, 10],
    [9, 11],
    [9, 12],
    [9, 13],
    [9, 14],
    [10, 3],
    [11, 3],
    [11, 4],
    [12, 4],
    [12, 5],
    [13, 5],
    [13, 6],
    [14, 6],
    [14, 7],
    [14, 8],
    [14, 9],
    [14, 10],
    [14, 11],
    [13, 11],
    [13, 12],
    [12, 12],
    [12, 13],
    [11, 13],
    [11, 14],
    [10, 14],
  ];

  const smileCoords = coordsOutline
    .concat(coordsEyes, coordsSmile)
    .map(([r, c]) => {
      return [
        r + rowLowerBound + 1, //coord + safezone + plus one error
        c + colLowerBound + 1 + 10, //coord + safezone + plus one error + 10 centering
      ];
    });

  for (let r = 1; r <= numberOfRows; r++) {
    for (let c = 1; c <= numberOfCols; c++) {
      let elem;
      let colCriteria = 34 <= c && c <= 72; // safe zone col
      let rowCriteria = 4 <= r && r <= 21; //safe zone row
      if (
        smileCoords.some(([coordR, coordC]) => {
          return coordR === r && coordC === c;
        })
      ) {
        console.log('some triggered');
        elem = buildLaugh(r, c, '#3EB489', 24, 1, 3);
      } else {
        elem = buildLaugh(r, c, colors.black, 24, 1, 2);
      }
      icons.push(elem);
    }
  }
  useEffect(() => {
    console.log(
      'number of rows:',
      numberOfRows,
      'number of cols:',
      numberOfCols
    );
  }, [icons]);

  return <div css={dGrid}>{icons}</div>;
};
export default IconMat;
