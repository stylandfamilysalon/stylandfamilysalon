import React from 'react';

type ChatMessageProps = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  // Basic parsing for line breaks
  const formatContent = (text: string) => {
    return text.split('\n').map((str, index, array) => (
      <React.Fragment key={index}>
        {str}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
          isUser
            ? 'bg-zinc-800 text-white rounded-br-none'
            : 'bg-zinc-100 text-zinc-900 rounded-bl-none border border-zinc-200'
        }`}
      >
        <div className="leading-relaxed whitespace-pre-wrap">{formatContent(content)}</div>
      </div>
    </div>
  );
}
