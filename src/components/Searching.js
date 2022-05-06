import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchStr } from '../store/action';
import {ReactComponent as Magnifier} from '../svg/magnifier.svg';

export const Searching = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <SearchingContainer>
      <Input placeholder='Поиск' value={value} onChange={(e) => setValue(e.target.value)}/>
      <Magnifier onClick={() => dispatch(setSearchStr(value))}/>
    </SearchingContainer>
  )
};

const SearchingContainer = styled.div({
  display: 'flex',
  background: '#5A5C66',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '52px',
  padding: '0 24px 0 26px',
  width: '631px',
  marginBottom: '15px',
});

const Input = styled.input({
  background: '#5A5C66',
  color: '#B2B7BF',
  height: '19px',
  border: 'none'
});
