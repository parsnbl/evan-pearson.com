'use client';

import Image from 'next/image';

import facepaint from 'facepaint';
import { css } from '@emotion/react';
import { Github, Linkedin } from 'lucide-react';
import { lightBorder } from '@/styles';
import LinkButton from './LinkButton';

import { colors } from '@/styles';

const mq = facepaint(['@media(min-width:600px)']);

const AboutMe = css(
  mq({
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', 'row'],
  }),
);

const AboutMeImage = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ButtonWrapper = css(mq({
    display: 'flex',
    flexDirection: ['column','row'],
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));

const ButtonCSS = css(mq({
  display: 'flex',
  alignItems: 'center',
  width: ['100%', 'fit-content'],
  fontSize: '1em',
  border: lightBorder,
}))

const ButtonContainer = css(mq({
  width: ['100%', 'fit-content']
}))


console.log(ButtonWrapper);
const Blurb = () => {
  return (
    <div css={AboutMe}>
      <div css={AboutMeImage}>
        <Image
          src="/assets/EvanGC.jpeg"
          alt="Picture of the engineer at the grand canyon."
          height={300}
          width={300}
          css={{
            marginBottom: '.2em',
            border: lightBorder,
            boxShadow: '1px 1px 3px lightgray',
          }}
        />
        <div css={ButtonWrapper}>
          <LinkButton
            href="https://github.com/parsnbl"
            ext={true}
            buttonCSS={ButtonCSS}
            wrapperCSS={ButtonContainer}
          >
            <Github />
            &nbsp;@parsnbl
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/evanpearson89/"
            ext={true}
            buttonCSS={ButtonCSS}
            wrapperCSS={ButtonContainer}
          >
            <Linkedin />
            &nbsp;in/evanpearson89
          </LinkButton>
        </div>
      </div>
      <div css={{ fontSize: '1.5em'}}>
        <p>
          My name is Evan Pearson and I&apos;m a{' '}
          <span css={{ fontWeight: 'bold' }}>full-stack software engineer</span>
          . I build cool things throughout the stack, from performant SPAs to
          eCommerce that converts. I have a passion for <span css={{ color: colors.pictonBlue }}>strategy, analytics, and building digital experiences</span> that customers{' '}
          <span css={{ fontWeight: 'bold' }}>love</span>. 
        </p>
        <p>I&apos;m looking for the next big thing to be apart of. When I&apos;m not coding, I&apos;m making music, adventuring, and getting my cold brew recipe just right.
        </p>
      </div>
    </div>
  );
};

export default Blurb;
