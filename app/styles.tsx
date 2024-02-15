
import { Roboto_Flex, Roboto_Mono, Roboto_Condensed } from "next/font/google";
import { css } from "@emotion/react";
import laugh from '@public/assets/laugh.svg';
import atom from '@public/assets/atom.svg';
import audiowaveform from '@public/assets/audio-waveform.svg';
import bugoff from '@public/assets/bug-off.svg';
import gauge from '@public/assets/gauge.svg';
import handmetal from '@public/assets/hand-metal.svg';
import mountain from '@public/assets/mountain.svg';
import palmtree from '@public/assets/palmtree.svg';
import rocket from '@public/assets/rocket.svg';
import star from '@public/assets/star.svg';
import sun from '@public/assets/sun.svg';
import tenttree from '@public/assets/tent-tree.svg';
import thumbsup from '@public/assets/thumbs-up.svg';
import wrench from '@public/assets/wrench.svg';

const svgs = [
  laugh,
  atom,
  audiowaveform,
  bugoff,
  gauge,
  handmetal,
  mountain,
  palmtree,
  rocket,
  star,
  sun,
  tenttree,
  thumbsup,
  wrench,
];

const randomSVG = svgs[Math.floor(Math.random() * svgs.length)];

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  platinum: '#E6E6E6',
  pompAndPower: '#86608E',
  pictonBlue: '#50AFDA'
}

export const container = {
  height: '100%',
  width: '100%'
}



export const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap'
});

export const roboto_condensed = Roboto_Condensed({ 
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const lightBorder = `1px ${colors.platinum} solid`

export const iconBackground = {
  backgroundImage: `url(${randomSVG.src})`,
  backgroundRepeat: 'repeat',
  backgroundAttachment: 'fixed',
}