import React from "react";
// 引入和一个方法及两个组件
// useMultiChatLogic 接受用户身份验证参数并返回状态管理对象。
//   MultiChatSocket, MultiChatWindow 就是socket ， 实现通讯的作用。
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/coustomHeader";
import StandardMessageForm from "@/components/CoustomMessageForms/StandardMessageForm";

// 这个chat是 useMultiChatLogic 验证完成后返回大型状态管理对象。
// 包含很多，具体得研究官方文档
const Chat = () => {
  const chatpProps = useMultiChatLogic(
    "ec4badbe-a97d-49c1-a7f8-95e17943591b",
    "testuser",
    "123456"
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...Chat} />

      <MultiChatWindow
        {...Chat}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageFrom={(props) => {
          return (
            <StandardMessageForm
              props={props}
              activeChat={chatpProps.chat}
            ></StandardMessageForm>
          );
        }}
      ></MultiChatWindow>
    </div>
  );
};

export default Chat;
