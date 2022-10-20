import React, { useEffect } from "react";

export default function ChatCard({ chat, setReload }) {
  const isMe = (id) => id === sessionStorage.getItem("id");
  useEffect(() => {
    setReload(false);
  }, []);
  return (
    <div>
      {" "}
      <div class="flex flex-col w-full">
        <div
          className={`${
            isMe(chat.id) ? "bg-green-100 self-end" : "bg-gray-50"
          } rounded-lg p-4 w-2/3 ${chat.color}`}
        >
          <div class="flex text-xs text-gray-600 justify-between">
            <div class="">
              <strong>{chat.id}</strong>
            </div>
            <div class="">
              {new Date(chat.time).toLocaleDateString()} at
              {new Date(chat.time).toLocaleTimeString()}
            </div>
          </div>

          <div class="py-2">{chat.text}</div>
        </div>
      </div>
    </div>
  );
}
