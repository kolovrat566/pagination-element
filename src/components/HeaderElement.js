import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../svg/arrow.svg';

export const HeaderButton = ({text, width, onClick}) => {

const HeaderBtn = styled.div`
  width: ${width}px;
  color: #FFFFFF;
    > * {
      &:first-child {
         margin-right: 40px;
      }
    }
`;
  
  return (
    <HeaderBtn onClick={onClick}>
      <span>{text}</span>
      <Arrow/>
    </HeaderBtn>
  )
};
