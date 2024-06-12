"use client";
import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="overflow-auto">
      <div className="flex items-center gap-5 p-5">
        <div className="bg-slate-500/50 flex-1 flex items-center gap-5 rounded-xl p-2">
          <img className="size-5" src="/search.png" alt="" />
          <input
            className="bg-transparent border-none outline-none text-white"
            type="text"
            placeholder="Search"
          />
        </div>
        <img
          className="size-9 bg-slate-500/50 rounded-lg p-3 cursor-pointer"
          src={addMode ? "/minus.png" : "/plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b border-gray-300">
        <img className="size-12 rounded-full object-cover "src="/avatar.png" alt="" />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Jane Doe</span>
          <p className="text-sm font-light">Hello</p>
        </div>
      </div>
      
    </div>
  );
};

export default ChatList;
