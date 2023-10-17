import React from 'react'

function Search() {
  const keyword =  [
    {
    "key" : "#바나나맛우유"
  },
  {
    "key" : "#더단백"
  },
  {
    "key" : "#슈퍼콘"
  },
  {
    "key" : "#요플레"
  },
  {
    "key" : "#아카페라"
  },
  {
    "key" : "고객센터"
  }
]
  return (
    <div className='max-w-full'>
        <div className="max-w-[1020px] h-20 rounded-[40px] shadow bg-white
        mt-[40px] mx-auto justify-between">
            <div className="w-full h-full  pr-[15px] pl-[55px] justify-between">
                <input type="text" placeholder='제품명을 입력해 주세요' className='w-[78%] h-full pl-[30px] text-[17px] tracking-[0.85px] text-left '/>
            </div>
        </div>
        <ul className='flex_center mt-[25px] title tracking-[25px]'>

          {
           keyword.map((e,i)=>{
            return(
              <li className='text-xs min-w-[120px] h-[37px] rounded-[18.5px] border-1 border-[#edecef] cursor-pointer px-5' key={i}>{e.key}</li>
            )
           })

          }
        </ul>
    </div>
  )
}

export default Search