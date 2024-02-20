'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { css } from '@emotion/react';
import SubmitButton from '@/components/SubmitButton';
import Link from 'next/link';

import Band from '@/components/Band';
import mail from '../hooks/mail';

const MAX_SUBJECT_LENGTH = 140;
const MAX_BODY_LENGTH = 2083;

interface FormProps {
  subject: string;
  email: string;
  body: string;
}

const bandStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const formStyle = css({
  display: 'flex',
  width: '500px',
  flexDirection: 'column',
});

const errorText = css({ fontSize: '.8em', color: 'red', marginBottom: '.7em' });

const validate = (values: FormProps) => {
  const errors = {} as FormProps;
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
    errors.body = `Must be ${MAX_BODY_LENGTH} characters or less`;
  }
  return errors;
};

const inputDiv = css({
  width: '100%',
  '& input': {
    width: '100%',
    padding: '10px',
    outline: 'none',
    border: '1px solid black',
    borderRadius: '5px',
  },
  '& textarea': {
    width: '100%',
    height: '150px',
    padding: '10px',
    outline: 'none',
    border: '1px solid black',
    borderRadius: '5px',
    resize: 'none',
  },
});

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      subject: '',
      email: '',
      body: '',
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: FormProps) => {
      setSubmitSuccess(true);
      const response = await mail(values);
      if (response.messageSuccess) {
        alert('Message sent successfully!');
      } else {
        alert('Message not sent correctly');
      }
    },
  });
  if (submitSuccess) {
    return (
      <Band outerCSS={bandStyle}>
        <p css={{ textAlign: 'start', width: '500px' }}>
          Thank you for reaching out! We&apos;ll chat soon!
        </p>
        <div css={{ textAlign: 'end', width: '500px' }}>
          <Link href="/">◂ Home</Link>
        </div>
      </Band>
    );
  } else {
    return (
      <Band outerCSS={Object.assign(bandStyle, { paddingTop: '0px' })}>
        <form onSubmit={formik.handleSubmit} css={formStyle}>
          <div css={inputDiv}>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              css={{ marginBottom: formik.errors.subject ? '0em' : '24px' }}
            />
          </div>
          {formik.errors.subject ? (
            <div css={errorText}>{formik.errors.subject}</div>
          ) : null}
          <div css={inputDiv}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              css={{ marginBottom: formik.errors.email ? '0em' : '24px' }}
            />
          </div>
          {formik.errors.email ? (
            <div css={errorText}>{formik.errors.email}</div>
          ) : null}
          <div css={inputDiv}>
            <textarea
              id="body"
              name="body"
              placeholder="Body"
              onChange={formik.handleChange}
              value={formik.values.body}
              css={{
                marginBottom: formik.errors.body ? '0em' : '24px',
                fontFamily: 'Roboto Flex',
              }}
            />
          </div>
          {formik.errors.body ? (
            <div css={errorText}>{formik.errors.body}</div>
          ) : null}
          <div
            css={[inputDiv, { display: 'flex', justifyContent: 'flex-end' }]}
          >
            <SubmitButton
              buttonCSS={{ fontSize: '1.5em' }}
              text="SEND MESSAGE"
            />
          </div>
        </form>
      </Band>
    );
  }
};

export default ContactForm;
