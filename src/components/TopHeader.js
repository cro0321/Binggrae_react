import React from 'react'

function TopHeader() {
  return (
    <div className='max-w-full md:opacity-0'>
      <div className="pb-0 px-20 border-b-[1px] border-[#e7e7e7] z-10 relative ">

        <div className="flex justify-end text-center">
          <ul className='flex_center justify-center pl-[15px] text-center
        relative'>
            <li className='flex_center'>
              <span className='tracking-[-1px] mr-[3px]  text-[#1b1b1b]'>구매포털시스템</span>
              <img className='align-middle' src="/Images/bing-link_arrow01-top.png" alt="화살표" />
              <div className="after"></div>
            </li>
            <li className='flex_center ml-[20px]'><span className='tracking-[-1px] mr-[3px]  text-[#1b1b1b]'>인재채용</span><img className='align-middle' src="/Images/bing-link_arrow01-top.png" alt="화살표" /></li>
          </ul>


        </div>
      </div>
    </div>
  )
}

export default TopHeader