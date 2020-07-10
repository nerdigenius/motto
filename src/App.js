import React from 'react';
import NavBar from './component/Navigation/NavBar';
import './App.css';
import Layout from './component/Layout/Layout';
import TitleComponent from './component/TitleComponent/TitleComponent';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Layout>
        <TitleComponent/>
      </Layout>
    </div>
  );
}

export default App;
