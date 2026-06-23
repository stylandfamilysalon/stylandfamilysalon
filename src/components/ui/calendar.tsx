'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays 
} from 'date-fns';

export type CalendarProps = {
  mode?: 'single';
  defaultMonth?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
};

export function Calendar({
  mode = 'single',
  defaultMonth,
  selected,
  onSelect,
  className = '',
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(defaultMonth || new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button 
          type="button" 
          onClick={prevMonth} 
          className="p-2 hover:bg-white/10 rounded-md transition"
        >
          <ChevronLeft className="h-4 w-4 text-white/70" />
        </button>
        <div className="text-sm font-semibold text-white">
          {format(currentMonth, 'MMMM yyyy')}
        </div>
        <button 
          type="button" 
          onClick={nextMonth} 
          className="p-2 hover:bg-white/10 rounded-md transition"
        >
          <ChevronRight className="h-4 w-4 text-white/70" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-xs font-medium text-white/50 w-8">
          {format(addDays(startDate, i), 'EEEEE')}
        </div>
      );
    }
    return <div className="flex justify-between mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const isSelected = selected && isSameDay(day, selected);
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isPast = day < new Date() && !isSameDay(day, new Date());

        days.push(
          <button
            type="button"
            key={day.toString()}
            onClick={() => {
              if (!isPast) onSelect?.(cloneDay);
            }}
            disabled={isPast}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm transition-colors ${
              isSelected
                ? 'bg-[#d4af37] text-black font-bold'
                : isPast
                ? 'text-white/20 cursor-not-allowed'
                : !isCurrentMonth
                ? 'text-white/40'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <span>{formattedDate}</span>
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex justify-between mb-1" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className={`p-4 bg-transparent ${className}`}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
