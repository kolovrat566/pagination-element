import React from 'react';
import styled from 'styled-components';

export const ContentItem = ({item}) => {
  const {id, body, title} = item;

  return (
    <ItemContainer>
      <Id>{id}</Id>
      <Title>{title}</Title>
      <Description>{body}</Description>
    </ItemContainer>
  )
};

const ItemContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '87px',
  background: '#FFFFFF',
  border: '1px solid #E3E6EC',
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '137.69%',
  color: '#474955',
});

const Id = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  borderRight: '1px solid #E3E6EC',
  width: '110px',
});

const Title = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 8px 0 12px',
  borderRight: '1px solid #E3E6EC',
  width: '529px',
});

const Description = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 8px 0 12px',
  width: '432px',
});
