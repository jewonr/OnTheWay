import React, { useEffect, useState } from 'react';
import Header from './pages/Header';
import TodayFeed from './pages/TodayFeed';
import MyScrap from './pages/MyScrap';
import TodayTodo from './pages/TodayTodo';
import Memo from './pages/Memo';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddDataContainer from './pages/AddDataContainer';
import LoginPage from './pages/LoginPage';
import { getAuth } from './service/firebase';
import { useLocation } from 'react-router-dom';

const Box = styled.div`
  width 100%;
  height: 76px;
`

function App() {
  const navigate = useNavigate();
  const uid = sessionStorage.getItem("uid")
  useEffect(() => {
    if(sessionStorage.getItem("uid")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [uid]);

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<><Header /><Box /><TodayFeed /><MyScrap /><TodayTodo /><Memo /></>} />
        <Route path='/feed' element={<><Header /><Box /><TodayFeed /></>} />
        <Route path='/scrap' element={<><Header /><Box /><MyScrap /></>} />
        <Route path='/todo' element={<><Header /><Box /><TodayTodo /></>} />
        <Route path='/memo' element={<><Header /><Box /><Memo /></>} />
      </Routes>     
      <AddDataContainer />
    </>
  );
}

export default App;
