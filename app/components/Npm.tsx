'use client'


import { css } from '@emotion/react'
import { colors } from '@/styles'


const NPM = () => {
  const npmWrapper = css({
    ':active .npm-outer': {
      fill: colors.black
    },
    ':active .npm-inner': {
      fill: colors.white
    }
  })
  const innerColor = colors.white;
  let outerColor
  const onClick = () => {

  }

  return (
    <svg css={npmWrapper} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
		<g>
				<polygon className="npm-outer" fill={colors.white} points="0 256 0 0 256 0 256 256"/>
				<polygon className="npm-inner"fill={colors.black} points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"/>
		</g>
</svg>
  )
}

export default NPM;