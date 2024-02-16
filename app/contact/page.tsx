'use client';


import Band from '@/components/Band';
import Icon from '@/components/Icon';
import ContactForm from './components/ContactForm';
import { css } from '@emotion/react';


export default function Contact() {
  const contactCSS = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  return (
    <>
      <Band outerCSS={contactCSS}>
        <div css={{ textAlign: 'start', width: '' }}>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: '1em',
            }}
          >
            <h2 css={{ margin: '0px', flexGrow: 1 }}>CONTACT</h2>
            <div css={{ borderRight: '1px solid black' }}>SOCIAL&nbsp;</div>
            <div>
              &nbsp;
              <Icon icon="github" href="https://github.com/parsnbl" />
              <Icon
                icon="linkedin"
                href="https://www.linkedin.com/in/evanpearson89/"
              />
            </div>
          </div>
          <p css={{ margin: '0px', flexGrow: 1 }}>
            Get in touch! I&apos;m always interested in chatting freelance projects
            or collaboration opportunities.
          </p>
        </div>
      </Band>
      <ContactForm />
    </>
  );
}
