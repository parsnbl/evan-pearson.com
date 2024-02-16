'use client';

import Image from 'next/image';
import { css } from '@emotion/react'
import { Github, Linkedin } from 'lucide-react';

import { lightBorder } from '@/styles';

import LinkButton from './LinkButton';





const Blurb = () => {
  return (
          <div css={{display: 'flex', alignItems: 'center'}}>
              <div css={{marginRight: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Image 
                  src='/assets/EvanGC.jpeg'
                  alt="Picture of the engineer at the grand canyon."
                  height={300}
                  width={300}
                  css={{ 
                    marginBottom: '.2em',
                    border: lightBorder,
                    boxShadow: '1px 1px 3px lightgray'
                  }}/>
                  <div css={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <LinkButton href="https://github.com/parsnbl" ext={true} 
                  buttonCSS={{
                    display: 'flex', 
                    alignItems:'center', 
                    fontSize: '1em',
                    border: lightBorder
                    }}>
                    <Github />&nbsp;@parsnbl
                  </LinkButton>
                    <LinkButton 
                    href="https://www.linkedin.com/in/evanpearson89/" 
                    ext={true} 
                    buttonCSS={{
                      display: 'flex', 
                      alignItems:'center', 
                      fontSize: '1em',
                      border: lightBorder
                      }}>
                      <Linkedin />&nbsp;in/evanpearson89
                    </LinkButton>
                  </div>
                </div>
              <div>
                <p>
                  My name is Evan Pearson and I'm a <span css={{fontWeight: 'bold'}}>full-stack software engineer</span>. I build cool things throughout the stack,  from performant SPAs to eCommerce that converts. I'm bullish on the Internet, Entertainment, and Video Gaming. When I'm not coding, I'm making music, cooking, reading, and hiking.
                </p>
                <p>I love bootstrapping and making an impact. I have a passion for growth and making cool products that <span css={{fontWeight: 'bold'}}>customers love</span>. I'm always looking for collaborators.</p>
              </div>
            </div>
           
  );
};

export default Blurb;