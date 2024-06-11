import React from 'react'

const Userinfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img className="size-12 rounded-full" src="/avatar.png" alt="avatar"/>
        <h2>John Doe</h2>
      </div>
      <div className='flex gap-5'>
        <img className="size-5 cursor-pointer" src="/more.png" alt=""/>
        <img className="size-5 cursor-pointer" src="/video.png" alt=""/>
        <img className="size-5 cursor-pointer" src="/edit.png" alt=""/>
      </div>
    </div>
  )
}

export default Userinfo