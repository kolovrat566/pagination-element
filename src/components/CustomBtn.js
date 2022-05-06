import React from 'react';
import styled from 'styled-components';

export const CustomBtn = ({text, onClick}) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
};

const Button = styled.button({
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '137.69%',
  color: '#474955',
  border: 'none',
  background: 'transparent',
});
