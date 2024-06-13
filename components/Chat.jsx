"use client";

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import './Chat.css';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="flex flex-col basis-1/2 border-l border-r border-gray-300 h-full">
      <div className="p-5 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center gap-5">
          <img
            className="size-14 rounded-full object-cover"
            src="/avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold">Jane Doe</span>
            <p className="text-sm font-light text-gray-100">
              Lorem ipsum dolor sit amet{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img className="size-5" src="/phone.png" alt="" />
          <img className="size-5" src="/video.png" alt="" />
          <img className="size-5" src="/info.png" alt="" />
        </div>
      </div>
      <div
        id="center"
        className="p-5 flex-1 overflow-scroll flex flex-col gap-5"
      >
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae quibusdam omnis ut voluptas aut a alias unde porro
              maiores asperiores vitae magni dolorum, tempora dolorem non
              excepturi vero aliquam velit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae quibusdam omnis ut voluptas aut a alias unde porro
              maiores asperiores vitae magni dolorum, tempora dolorem non
              excepturi vero aliquam velit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div
        id="chat-bottom"
        className="mt-auto flex p-5 items-center gap-5 justify-between border-t border-gray-300"
      >
        <div className="flex gap-5">
          <img className="size-5 cursor-pointer" src="/img.png" alt="" />
          <img className="size-5 cursor-pointer" src="/camera.png" alt="" />
          <img className="size-5 cursor-pointer" src="/mic.png" alt="" />
        </div>
        <input
          className="flex-1 p-5 rounded-lg text-base bg-black/40 border-none outline-none text-white"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="relative">
          <img
            className="size-5 cursor-pointer"
            src="/emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="absolute bottom-12 left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-5 rounded-md border-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
