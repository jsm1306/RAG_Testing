import React, { useEffect, useRef } from 'react';
import Message from './Message';

const Chat = ({ messages, isTyping }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="chat-container" ref={chatRef}>
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg.text}
          isUser={msg.isUser}
          isTyping={isTyping && index === messages.length - 1 && !msg.isUser}
        />
      ))}
    </div>
  );
};

export default Chat;
