import React from 'react'
import { useSelector } from 'react-redux';
import enData from "../locales/en.json";
import krData from "../locales/kr.json";
import store from '../store';
import { NavLink } from 'react-router-dom';




function Nav() {
  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enData : krData;

  const data =  [
      {
      "title" : "회사소개"
    },
    {
      "title" : "제품소개"
    },
    {
      "title" : "지속가능경영"
    },
    {
      "title" : "투자정보"
    },
    {
      "title" : "뉴스룸"
    },
    {
      "title" : "고객센터"
    }
  ]
  

  return (
    <div className="max-w-full">
      <div className="max-w-full box-border flex items-start justify-between mx-auto px-[80px] py-[40px] relative">
          <div className="max-w-full align-top z-[101]">
         <NavLink><img className="max-w-full align-top " src="/Images/bing-logo-top.png" alt="빙그레 로고" /></NavLink> 
          </div>
  

      <div className="absolute top-0 left-1/2 translate-x-[-50%] z-[20] block">
      <ul className="flex_center justify-end whitespace-nowrap">
      {
        data.map((e,i)=>{
          return(
            <li key={i} className='pt-[45px] pr-[80px]'>
              <NavLink to="/" className='text-[20px] pb-[40px]'>{e.title}</NavLink>
            </li>
          )
        })
      }
      </ul>
      </div>
      <div className="flex_center">
        <div className="flex_center">
          <div className="mr-[33px] relative cursor-pointer">
            <p className='flex_center'>
              <span className='text-[16px] poppins' >KR</span>
              <span className='ml-[10px] leading-[1] text-[0px]'><img className='max-w-full align-top' src="/Images/lang_btn.png" alt="lang화살표" /></span>
            </p>
          </div>

          <div className="w-[26px] relative">
            <div className="block w-full h-full">
              <span className='block w-full h-[2px] bg-black transition ease-in-out delay-[0.3s]'></span>
              <span className='block w-full h-[2px] bg-black transition ease-in-out delay-[0.3s] mt-2'></span>
              <span className='block w-full h-[2px] bg-black transition ease-in-out delay-[0.3s] mt-2'></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Nav