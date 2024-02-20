'use client';

import { css } from '@emotion/react';

import { colors, container } from '@/styles';
import { Wrapped } from '../../declarations';

const flexCenter = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const style = css({
  fontSize: '2em',
  color: colors.pictonBlue,
  width: '500px',
  height: '600px',
  fontFamily: 'sans-serif',
});

const CenteredModal = ({ children }: Wrapped) => {
  const centeredContainer = css([flexCenter, container]);
  const modal = css([style, flexCenter]);

  return (
    <div css={centeredContainer}>
      <div css={modal}>{children}</div>
    </div>
  );
};

export default CenteredModal;
