import React from 'react'
import Header from './header';
import Dashboard from './Dashboard';
import Intro from './intro';
import Scopeofwork from './Scope';
import Framework from './Framework';
import Riskmanagement from './Riskmanagement';
import Updates from './update';
import Post from './Post'
import Footer from './Footer';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Intro/>
    <Scopeofwork/>
    <Framework/>
    <Riskmanagement/>
    <Post/>
    <Updates/>
    <Footer/>

    </>
  )
}

export default Index