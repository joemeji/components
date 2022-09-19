import dayjs from 'dayjs';
import React, { useState, useEffect, createRef, useLayoutEffect } from 'react';
import { Calendar as CalendarContainer, CalendarBody, CalendarDetails, Header as CalendarHeader, Navigation, Week } from './calendar.style';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const onNavigate = (type) => {
    if (type === 'prev') 
      setCurrentDate(date => date.add(-1, 'month'));
    if (type === 'next') 
      setCurrentDate(date => date.add(1, 'month'));
  };

  return (
    <CalendarContainer>
      <div>
        <button>close</button>
        <CalendarNvigator 
          onNavigate={(type) => onNavigate(type)}
          currentDate={currentDate}
        />
        <div style={{ overflow: 'hidden', display: 'flex' }}>
          <CalendarDays
            currentDate={currentDate}
          />
          <CalendarDays
            currentDate={currentDate}
          />
        </div>
      </div>
    </CalendarContainer>
  );
}

const CalendarDays = React.forwardRef(({ currentDate }, ref) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (currentDate) {
      const firstDayIndex = new Date(monthDays()[0]).getDay();
      const lastDayIndex = new Date(monthDays()[monthDays().length - 1]).getDay();
      const prevMonthDays = [...monthDays(-1)].map(day => ({ day, highlighted: false }));
      let currentMonthDays = [...monthDays()].map(day => ({ day, highlighted: true }));
      const nextMonthDays = [...monthDays(1)].map(day => ({ day, highlighted: false }));

      function monthDays(diff = null) {
        const _days = [];
        let monthDiff = currentDate.endOf('month');
        if (diff) monthDiff = currentDate.add(diff, 'month').endOf('month');
        for (let i = 1; i <= monthDiff.format('DD'); i++) {
          const _date = dayjs(`${monthDiff.format('MM')}/${i}/${monthDiff.format('YYYY')}`).format('MM/DD/YYYY');
          _days.push(_date);
        }
        return _days;
      }

      if (firstDayIndex > 0) {
        currentMonthDays.unshift(
          ...prevMonthDays.slice(-firstDayIndex)
        );
      }
      if (lastDayIndex < 6 && lastDayIndex !== -1) {
        currentMonthDays.push(
          ...nextMonthDays.slice(0, dayNames.length - lastDayIndex - 1)
        );
      }

      let _currentMonthDays = [];
      for (let i = 0; i < currentMonthDays.length; i += 7) {
        _currentMonthDays.push(currentMonthDays.slice(i, i + 7));
      }
      setDays(_currentMonthDays);
    }
  }, [currentDate]);

  return (
    <CalendarBody ref={ref}>
      {days && days.map((rows, key) => (
        <div key={key} style={{ display: 'flex' }}>
          {rows && rows.map(({ day, highlighted }, key) => (
            <div key={key} tabIndex="0" className={`day ${highlighted ? 'highlighted' : ''}`}>
              {dayjs(day).format('D')}
            </div>
          ))}
        </div>
      ))}
    </CalendarBody>
  );
});

function CalendarNvigator({ onNavigate, currentDate }) {
  return (
    <CalendarHeader>
      <Navigation>
        <CalendarDetails>
          <span tabIndex={0}>{currentDate.format('MMMM')}</span>
          <span tabIndex={0}>{currentDate.format('YYYY')}</span>
        </CalendarDetails>
        <div>
          <button title='Previous' onClick={() => onNavigate && onNavigate('prev')}>Prev</button>
          <button title='Next' onClick={() => onNavigate && onNavigate('next')}>Next</button>
        </div>
      </Navigation>
      <Week>
        {dayNames.map(item => item.slice(0, 3)).map((name, key) => (
          <div key={key}>{name}</div>
        ))}
      </Week>
    </CalendarHeader>
  );
}