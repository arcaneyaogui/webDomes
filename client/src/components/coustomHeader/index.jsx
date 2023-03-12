import React from "react";
// 添加图标
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

function coustomHeader({ chat }) {
  console.log("chat", chat);
  console.log("chat.description", chat.description);
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>

      <div className="flexbetween">
        <PhoneIcon className="icon-chat" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">暂时无人聊天</p>
        )}
      </div>
    </div>
  );
}

export default coustomHeader;
