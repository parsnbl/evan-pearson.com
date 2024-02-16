'use client'

import { useState, useEffect} from 'react'
import { css } from '@emotion/react'
import { colors, lightBorder } from '@/styles'

const Tag = ({tag, count, clickCallback}) => {
  const [active, setActive] = useState(false)

  const clickHandler = async () => {
    let update = !active;
    await setActive(update);

  }

  let tagCSS = {
    fontFamily: 'Roboto Mono',
    border: lightBorder,
    color: colors.black,
    background: colors.white,
    marginRight: '.25em',
    fontSize:".8em",
    display: 'inline-block',
    ':hover': {
      outline: `1px solid ${colors.pictonBlue}`
    },
  }
  if (active) {
    tagCSS.color = colors.white;
    tagCSS.background = colors.black;
  }
  return (
    <div 
      css={tagCSS}
      onClick={clickHandler}>
      {tag.toUpperCase()} <span css={{color: colors.pompAndPower}}>{count}</span>
    </div>
  )
}

export default Tag;