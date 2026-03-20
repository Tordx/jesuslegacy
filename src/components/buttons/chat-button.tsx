/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

"use client";

interface ChatButtonProps {
  chatOpen: boolean;
  toggleTawk: () => void;
  unreadCount: number;
}

const ChatButton = ({ chatOpen, toggleTawk, unreadCount }: ChatButtonProps) => {
  if (chatOpen) return null;

  return (
    <button
      onClick={toggleTawk}
      className="fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all"
    >
      <span className="relative flex items-center">
        <span className="text-xl">💬</span>
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] font-bold items-center justify-center border-2 border-white">
              {unreadCount}
            </span>
          </span>
        )}
      </span>
      <span className="font-medium">{unreadCount > 0 ? "New Message" : "Chat with us"}</span>
    </button>
  );
};

export default ChatButton;