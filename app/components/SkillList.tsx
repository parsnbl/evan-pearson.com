'use client';

import { css } from '@emotion/react';

const baseUlCSS = css({
  margin: '0px',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  '& li': {
    listStyleType: '"▸  "',
  },
});

const SkillList = ({
  listItems,
  columns,
}: {
  listItems: string[];
  columns?: number;
}) => {
  const ulCSS = columns
    ? css([baseUlCSS, { gridTemplateColumns: `repeat(${columns}, 1fr)` }])
    : baseUlCSS;

  return (
    <ul css={ulCSS}>
      {listItems.map((text) => (
        <li key={crypto.randomUUID()}>{text}</li>
      ))}
    </ul>
  );
};

export default SkillList;
