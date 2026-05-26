"use client";

import React, { useState } from 'react';
import { useChatbot } from './useChatbot';
import { ChatMessage } from './ChatMessage';
import { QuickReplies } from './QuickReplies';
import { MessageSquare, Send, Minimize2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ChatbotWidget() {
  const { messages, isOpen, setIsOpen, isLoading, sendMessage, messagesEndRef } = useChatbot();
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200"
          >
            {/* Header */}
            <div className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Salon Assistant</h3>
                  <p className="text-xs text-zinc-400">Online &bull; Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-zinc-50 scroll-smooth">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
              ))}

              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-zinc-200 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-zinc-500" />
                    <span className="text-xs text-zinc-500">Assistant is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <QuickReplies onSelect={(text) => sendMessage(text)} />

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-zinc-100 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-zinc-100 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-zinc-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                <Send size={16} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-zinc-900 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-zinc-800 transition-colors relative"
        >
          <MessageSquare size={24} />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
        </motion.button>
      )}
    </div>
  );
}
