import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import Nav from '../components/Nav'
import SectionBg from '../components/SectionBg'
import Search from '../components/Search'



function Main() {
  return (
    <>

   <div className="section_bg">
    <TopHeader/>
    <Header/>
    <Nav/>
    <SectionBg/>
    <Search/>
    </div>

    </>
  )
}

export default Main