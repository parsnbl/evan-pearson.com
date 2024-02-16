'use client';

import Link from 'next/link'
import Image from 'next/image';
import { Github, Linkedin, Globe } from 'lucide-react';
import { NpmOriginalWordmark } from 'devicons-react';
import NPM from './Npm'
import { colors, lightBorder } from '@/styles';




import { css } from '@emotion/react'


const icons = {
  github: <Github />,
  linkedin: <Linkedin />,
  web: <Globe />,
  npm: <NPM />
}

type SupportedIcons = 'github' | 'linkedin' | 'web' | 'npm';

const wrapperCSS = css({
  display: 'inline-block',
  width: '24px',

  height: '24px',
  margin: '0px 2px',
  ' a': {
    width: '24px',
    height: '24px',
    display: 'inline-block',
  },
  '& a:hover': {
    outline: 'none'
  },
  '& a:active': {
    backgroundColor: colors.white,
    color: colors.black
   },
   ':active': {
    'svg': {
      color: colors.white,
      backgroundColor: colors.black,
      fill: colors.black,
      stroke: colors.white
    }
    
  },
  ':hover': {
    boxShadow: `2px 2px ${colors.pictonBlue}`
  }
})

const Icon = ({icon, href, ext = true}: {icon: SupportedIcons, href: string, ext?: boolean}) => {

  let linkProps = {};
  if (ext) linkProps = {...linkProps, target: '_blank', rel: 'noreferrer noopener'};
  return (
    <div css={wrapperCSS}>
      <Link href={href} {...linkProps}>
        {icons[icon]}
      </Link>
    </div>
  )
}

export default Icon;