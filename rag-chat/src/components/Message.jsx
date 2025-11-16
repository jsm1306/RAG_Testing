import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Message = ({ message, isUser, isTyping }) => {
  const { displayedText } = useTypingEffect(isUser ? message : isTyping ? '' : message, 30);

  return (
    <div className={`message ${isUser ? 'user' : 'ai'}`}>
      <div className="message-content">
        {isUser ? message : isTyping ? displayedText : message}
        {isTyping && !isUser && <span className="cursor">|</span>}
      </div>
    </div>
  );
};

export default Message;
