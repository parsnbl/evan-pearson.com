'use client';
import React from "react";
import { css } from '@emotion/react';
import Image from "next/image";

import Band from "@/components/Band";
import { Hand } from 'lucide-react';
import { roboto_condensed } from '@/fonts';


const blurbBandStyle = css({
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});



const Blurb = () => {



  return (
    <Band cssStyles={blurbBandStyle}>
            <div css = {{
              display: 'flex',
              alignItems: 'center'

            }}>
              <Image 
                src='/assets/EvanGC.jpeg'
                alt="Picture of the engineer at the grand canyon."
                height={300}
                width={300}

                css={{ 
                  borderRadius: '9999px',
                  paddingRight: '1em'
                }}
              />
              <div>
                <div css={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '.5em 0em'
                }}>
                  <Hand /><h1 className={roboto_condensed.className}>&nbsp;HEY THERE!</h1>
                </div>
                <p>
                  My name is Evan Pearson and I'm a <span css={{fontWeight: 'bold'}}>full-stack software engineer</span>. From performant SPAs to eCommerce that converts, I make cool things throughout the stack. I'm bullish on the Internet, Entertainment, and Video Gaming. 
                  
                </p>
                <p>I love bootstrapping and making an impact. I have a passion for growth and making cool products that <span css={{fontWeight: 'bold'}}>customers love</span>. I'm looking for collaborators - let's talk.</p>
              </div>
            </div>
            <div>
            
            </div>
          </Band>
  );
};

export default Blurb;