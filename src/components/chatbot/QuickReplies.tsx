import React from 'react';

type QuickRepliesProps = {
  onSelect: (text: string) => void;
};

export function QuickReplies({ onSelect }: QuickRepliesProps) {
  const replies = [
    "Men Services",
    "Women Services",
    "Hair Spa",
    "Facial",
    "Pricing",
    "Book Appointment"
  ];

  return (
    <div className="flex flex-wrap gap-2 px-4 py-3 bg-zinc-50 border-t border-zinc-100">
      {replies.map((reply) => (
        <button
          key={reply}
          onClick={() => onSelect(reply)}
          className="text-xs bg-white border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap shadow-sm"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
