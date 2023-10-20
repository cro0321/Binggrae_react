import React from 'react'

function Search() {
  const keyword = [
    {
      "key": "#바나나맛우유"
    },
    {
      "key": "#더단백"
    },
    {
      "key": "#슈퍼콘"
    },
    {
      "key": "#요플레"
    },
    {
      "key": "#아카페라"
    }
  ]
  return (
    <div className='w-full'>
      <div className="max-w-[1020px] h-[80px] rounded-[40px] shadow bg-white
        mt-[40px] mx-auto pr-[15px] pl-[55px] ">
        <div className="w-full h-full  text-left flex_center justify-between">
          <input type="text" placeholder='제품명을 입력해 주세요' className="w-[78%] h-full pl-[30px] text-[17px] tracking-[0.85px] text-left search focus:outline-none " />
          <button className='search_button'>SEARCH</button>
        </div>
      </div>
      <ul className='flex_center mt-[25px] title tracking-[25px]'>

        {
          keyword.map((e,i) => {
          
            return (
              
              <li className='flex_center text-xs min-w-[120px] h-[37px] rounded-[18.5px] border border-[#edecef] cursor-pointer px-5 m' key={i}>{e.key}</li>
            )
          })

        }
      </ul>
    </div>
  )
}

export default Search