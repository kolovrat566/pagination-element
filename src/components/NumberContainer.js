import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
};

export const NumberContainer = () => {
  const allPosts = useSelector((state) => state.allPosts);
  const posts = useSelector((state) => state.desiredPosts);
  const currentPage = useSelector((state) => state.currentPage);
  const [countPage, setCountPage] = useState(10);

  useEffect(() => {
    if (allPosts.length !== 0) setCountPage(Math.ceil(posts.length / 10));
  }, [posts.length, currentPage]);

  const viewNumber = () => {
    if (countPage <= 5) return arr.slice(0,countPage)
    else {
      if (currentPage < 3) return arr.slice(0,5)
      if (currentPage < countPage-2) return arr.slice(currentPage-2, currentPage+3)
      else return arr.slice(countPage-5, countPage)
    }
  };

  return (
    <Container>
      {
        viewNumber().map((item) => {
          const active = item===currentPage+1

          const NumberItem = styled.div({
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '137.69%',
            padding: '0 7px 0 7px',
            color: active ? '#7EBC3C' : '#474955',
          });

          return (
            <NumberItem>{item}</NumberItem>
          )
        })
      }
    </Container>
  )
};

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
});


