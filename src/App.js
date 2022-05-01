import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import RepoList from './RepoList';



function App() {



  return (
    <div className='container'>
      <Header></Header>
      <RepoList></RepoList>
    </div>
  );
}

export default App;
