import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContentContainer } from './components/ContentContainer';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { Searching } from './components/Searching';
import { getAllPosts } from './store/action';

export const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.currentPosts);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    window.location.href= `#${currentPage + 1}`;
  }, [currentPage]);
  
  return (
    <AppContainer >
      <Searching/>
      <Header/>
      <ContentContainer data={posts}/>
      <Pagination/>
    </AppContainer>
  );
}

const AppContainer = styled.div({
  textAlign: 'center',
  margin: '186px 540px 0 148px',
  padding: '23px 77px 12px 74px',
  background: '#FFFFFF',
  boxShadow: '0px 4px 27px rgba(230, 231, 234, 0.78)',
});
