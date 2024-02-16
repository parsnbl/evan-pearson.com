'use client';

import { colors, lightBorder } from '@/styles';


interface TagProps {
  tag: string,
  count: number,
  clickCallback: () => void,
  isActive: boolean
}

const Tag = ({ tag, count, clickCallback, isActive}: TagProps) => {

  const conditional = isActive  && {color: colors.white, background: colors.black }
  

  const tagCSS =  {
      fontFamily: 'Roboto Mono',
      border: lightBorder,
      marginRight: '.25em',
      fontSize: '.8em',
      display: 'inline-block',
      color: colors.black,
      background: colors.white, 
      ':hover': {
        outline: `1px solid ${colors.pictonBlue}`,
      },
    };
    
  return (
    <div
      css={[tagCSS, conditional]}
      onClick={clickCallback}
    >
      {tag.toUpperCase()}{' '}
      <span css={{ color: colors.pompAndPower }}>{count}</span>
    </div>
  );
};

export default Tag;