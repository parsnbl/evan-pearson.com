'use client'

import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Band from '@/components/Band';
import Project from '@/components/Project';

import { roboto_condensed, roboto_flex } from '@/fonts';

import { useFormik } from 'formik';

import { colors } from '@/styles';


const MAX_SUBJECT_LENGTH = 140;
const MAX_BODY_LENGTH = 2083;




const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.subject) {
    errors.subject = 'Required';  
  } else if (values.subject.length > MAX_SUBJECT_LENGTH) {
    errors.subject = `Must be ${MAX_SUBJECT_LENGTH} characters or less`;
  }

  if (!values.body) {
    errors.body = 'Required';
  } else if (values.body.length > MAX_BODY_LENGTH) {
    errors.body = `Must be ${MAX_BODY_LENGTH} characters or less`
  }

  return errors;
};

const inputDiv = css({
  width: '100%',
  '& input': {
    width: 'calc(100% - 22px)',
    padding: '10px',
    outline: 'none',
    border: '1px solid black',
    borderRadius: '5px'
  },
  '& textarea': {
    width: 'calc(100% - 22px)',
    padding: '10px',
    outline: 'none',
    border: '1px solid black',
    borderRadius: '5px',
    resize: 'none',
  }
});


interface Values {
  subject: string;
  email: string;
  body: string;
}

export default function Proto() {
  
  const bandStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
   
  });

  const formStyle = css({
    display: 'flex',
    width: '500px',
    flexDirection: 'column',
    '& input': {
      marginBottom: '1em'
    },
    '& textarea#body': {
      height: '150px',
      marginBottom: '1em'
    },

  });

  const buttonStyle = css({
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    fontSize: '1em',
    fontFamily: roboto_condensed.style,
    fontWeight: 'bolder',
    borderRadius: '5px',
    ':hover': {
      color: colors.pictonBlue
    },
    ':active': {
      backgroundColor: colors.black
    }
  });

  const errorText = css({fontSize: '.8em', color: 'red'});
  
  const formik = useFormik({
    initialValues: {
      subject: '',
      email: '',
      body: '',
    },
    validate,
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values,null, 2));
    },
  });

  return (
    <>
      <Band cssStyles={bandStyle}>
        <div css={{textAlign: 'start', width: '500px'}}>
          <h2>CONTACT</h2>
          <p>Get in touch!</p>
        </div>
      </Band>
      <Band cssStyles={bandStyle}>
        <form onSubmit={formik.handleSubmit} css={formStyle}>
          <div css={inputDiv}>
            <input 
              id="subject" 
              name="subject" 
              type="text"
              placeholder="Subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
          </div>
          <div css={inputDiv}>
            <input 
              id="email" 
              name="email" 
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div css={inputDiv}>
            <textarea 
              id="body" 
              name="body" 
              placeholder="Body"
              onChange={formik.handleChange}
              value={formik.values.body}
              className={roboto_flex.className}
              css={{padding: '.2em'}}
            />
          </div>
          <div css={[inputDiv, {display: 'flex', justifyContent: 'flex-end'}]}>
            <button type="submit" css={buttonStyle}>SEND MESSAGE</button>
          </div>
          {/* Errors */}
          <div css={{position: 'absolute', top: '237px', left: '900px'}}>
            {formik.errors.subject ? <div css={errorText}>{formik.errors.subject}</div> : null}
          </div>
          <div css={{position: 'absolute', top: '290px', left: '900px'}}>
            {formik.errors.email ? <div css={errorText}>{formik.errors.email}</div> : null}
          </div>
          <div css={{position: 'absolute', top: '340px', left: '900px'}}>
            {formik.errors.body ? <div css={errorText}>{formik.errors.body}</div> : null}
          </div>
        </form>

      </Band>
      <Band cssStyles={bandStyle}>
        <p>Thank you for reaching out! We'll chat soon!</p>
        <Link href="/">◂ Home</Link>

      </Band>
    </>    
    
  );
}