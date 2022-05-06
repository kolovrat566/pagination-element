import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { choosePage } from '../store/action';

export const NumberItem = ({ active, text}) => {
  const dispatch = useDispatch();

  const Container = styled.div({
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '137.69%',
    padding: '0 7px 0 7px',
    color: active ? '#7EBC3C' : '#474955',
  });

  return (
    <Container onClick={() => {dispatch(choosePage(+text - 1))}}>{text}</Container>
  )
}
