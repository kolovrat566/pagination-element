import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { incrementCurrentPage, decrementCurrentPage } from '../store/action';
import { CustomBtn } from './CustomBtn';
import { NumberContainer } from './NumberContainer';

export const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <PaginationContainer>
      <CustomBtn onClick={() => dispatch(decrementCurrentPage())} text='Назад'/>
      <NumberContainer/>
      <CustomBtn onClick={() => dispatch(incrementCurrentPage())} text='Далее'/>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '16px',
});

