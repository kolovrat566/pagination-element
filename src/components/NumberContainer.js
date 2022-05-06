import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NumberItem } from './NumberItem';

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

  return (
    <Container>
      {
        countPage <= 5 ?
        <>{arr.slice(0,countPage).map((item) => { return <NumberItem text={item} active={item === currentPage + 1}/>})}</>
        :
        <>
          {
            currentPage < 3 ? 
            <>{arr.slice(0,5).map((item) => { 
              return <NumberItem text={item} active={item === currentPage  + 1}/>
              })}
            </> 
            :
            <>
              {
                currentPage < countPage-2 ? 
                <>{arr.slice(currentPage-2, currentPage+3).map((item) => { 
                  return <NumberItem text={item} active={item === currentPage  + 1}/>
                  })}
                </>
                :
                <>{arr.slice(countPage-5, countPage).map((item) => { 
                  return <NumberItem text={item} active={item === currentPage + 1}/>
                  })}
                </>
              }
            </>
          }
        </>
      }
    </Container>
  )
};

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
});


