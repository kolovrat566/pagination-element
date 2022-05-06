import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { sortPosts } from '../store/action';
import { HeaderButton } from './HeaderElement';

const headerValue = [
  {
    text: 'ID',
    width: 110,
    sort: 'id'
  },
  {
    text: 'Заголовок',
    width: 529,
    sort: 'title'
  },
  {
    text: 'Описание',
    width: 432,
    sort: 'body'
  },
];

export const Header = () => {
  const dispatch = useDispatch();
  const sortParams = useSelector((state) => state.sortParams);

  const handelClick = (item) => {
    if (item.sort === sortParams.param) {
      dispatch(sortPosts({
        asc: !sortParams.asc,
        param: item.sort
      }));
    } else {
      dispatch(sortPosts({
        asc: true,
        param: item.sort
      }));
    }
  };

  return (
    <HeaderContainer>
        {headerValue.map((item, index) => {
          return (
            <HeaderButton 
              text={item.text} 
              width={item.width} 
              onClick={() => handelClick(item)}
              key={index}
            />)
        })}
    </HeaderContainer>
  )
};

const HeaderContainer = styled.div({
  display: 'flex',
  background: '#474955',
  boxShadow: '0px 4px 27px rgba(230, 231, 234, 0.78)',
  height: '54px',
  alignItems: 'center'
  });
