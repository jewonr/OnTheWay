import React from 'react';
import './App.css';
import Header from './pages/Header';
import TodayFeed from './pages/TodayFeed';
import MyScrap from './pages/MyScrap';
import TodayTodo from './pages/TodayTodo';
import Memo from './pages/Memo';

function App() {
  return (
    <>
      <Header />
      <TodayFeed />
      <MyScrap />
      <TodayTodo />
      <Memo />
    </>
  );
}

export default App;
