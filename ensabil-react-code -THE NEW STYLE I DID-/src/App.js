import React, { useEffect } from 'react';
import {withRouter } from 'react-router-dom';

import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';


import './App.scss'
const App = (props) => {
  const { pathname } = props?.location;

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        disableMutationObserver: true,
        debounceDelay: 150,
        once: true,
        mirror: true,
      });
    }, 2000)
  }, [])


  return (
    <div className='layoutContainer'>
      <Layout pathName={pathname}>
        <Home {...props} aos={AOS} />
      </Layout>
    </div>
    
  )
};

export default withRouter(App);
