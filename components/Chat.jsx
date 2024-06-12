const Chat = () => {
  return (
    <div className="basis-1/2 border-l border-r border-gray-300 h-full">
      <div className="p-5 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center gap-5">
          <img className="size-14 rounded-full object-cover" src="/avatar.png" alt="" />
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold">Jane Doe</span>
            <p className="text-sm font-light text-gray-100">Lorem ipsum dolor sit amet </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img className="size-5" src="/phone.png" alt="" />
          <img className="size-5" src="/video.png" alt="" />
          <img className="size-5" src="/info.png" alt="" />
        </div>
      </div>
      <div className=""></div>
      <div className="flex p-5 items-center justify-between border-t border-gray-300">
        <div className="flex gap-5">
          <img className="size-5 cursor-pointer" src="/img.png" alt="" />
          <img className="size-5 cursor-pointer" src="/camera.png" alt="" />
          <img className="size-5 cursor-pointer" src="/mic.png" alt="" />
        </div>
        <input className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-200" type="text" placeholder="Type a message..." />
        <div>
          <img src="/emoji.png" alt="" />
        </div>
        <button className="">Send</button>
      </div>
    </div>
  )
}

export default Chat