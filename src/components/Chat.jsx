import React, { useEffect, useState } from "react";
import ChatCard from "./ChatCard";
import ChatForm from "./ChatForm";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [reload, setReload] = useState(false);

  // const timer = ref("");
  // const bottom = ref(null);
  const getId = () => sessionStorage.getItem("id");
  useEffect(() => {
    const chatValue = JSON.parse(localStorage.getItem("chats")) || [];
    setChats(chatValue);
  }, [reload, getId]);
  return (
    <div class="bg-gray-100">
      <div class="container flex flex-col h-screen mx-auto max-w-screen-md p-4 justify-between">
        <div class="text-center pb-4">
          <h1 class="font-medium text-lg pb-2">SIMPLE CHAT</h1>
          <p class="font-mono text-sm text-gray-600">
            Hint:{" "}
            <a href="/" target="_blank" class="underline">
              Open this app in another tab
            </a>{" "}
            to start a new session
          </p>
        </div>

        <div class="bg-white flex flex-col flex-grow py-8 px-4 gap-4 overflow-y-auto">
          {!chats?.length && (
            <div class="flex h-full text-center text-gray-700 justify-center items-center">
              Nothing to show! <br />
              Be the first to send your message.
            </div>
          )}

          {chats?.map((chat, i) => (
            <div key={i}>
              <ChatCard chat={chat} setReload={setReload} />
            </div>
          ))}
          {/* <div ref="bottom" /> */}
        </div>

        <ChatForm setReload={setReload} />
      </div>
    </div>
  );
}
