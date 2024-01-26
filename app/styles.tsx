import { css } from '@emotion/react';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  platinum: '#E6E6E6',
  pompAndPower: '#86608E',
  pictonBlue: '#50AFDA'
}

export const container = css({
  height: '100%',
  width: '100%'
})

export const border = css({
  borderBottom: '1px solid #e6e6e6',
  borderRight: '1px solid #e6e6e6',
  borderRadius: '0.375rem',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
})

export const activeBorder = css({
  borderBottom: '1px solid #e6e6e6',
  borderRight: '1px solid #e6e6e6',
  borderRadius: '0.375rem',
  boxShadow: `0 1px 3px 0px ${colors.pictonBlue}, 0 1px 2px -1px ${colors.pictonBlue}`,
})