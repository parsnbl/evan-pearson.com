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

export const smileCoords = coordsOutline
  .concat(coordsEyes, coordsSmile)
  
type Range = {rStart: number, rEnd: number, cStart: number, cEnd: number }

export const buildCoords = (range: Range | Range[]) => {
  const coords = new Set();
  if (!Array.isArray(range)) range = [range]
  for (const subRange of range) {
    for (let r = subRange.rStart; r <= subRange.rEnd; r++ ) {
      for (let c = subRange.cStart; c <= subRange.cEnd; c++) {
        coords.add([r, c]);
      }
    }
  }
  return Array.from(coords)
}


export const addSafeZone = (coords, rowLowerBound, colLowerBound, rowUpperBound, colUpperBound) => {
  coords.map(([r,c]) => {
    return [
      r + rowLowerBound + 1, //coord + safezone + plus one error
      c + colLowerBound + 1 + 10, //coord + safezone + plus one error + 10 centering
    ];
  })
  return coords.filter(([r, c]) => {
    return r <= rowUpperBound && c <= colUpperBound
  })
}