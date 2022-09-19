import styled from 'styled-components';

const dayWidth = '45px';
const borderRadius = '5px';

export const Calendar = styled.div`
  margin: 30px auto;
  box-shadow: 1px 2px 30px #0000000f;
  border-radius: ${borderRadius};
  padding: 8px;
  width: fit-content;
  &>div {
    width: calc(${dayWidth} * 7);
  }
`;

export const Week = styled.div`
  display: flex;
  align-items: center;
  &>div {
    width: ${dayWidth};
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CalendarBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  .day {
    width: ${dayWidth};
    height: ${dayWidth};
    align-items: center;
    display: flex;
    justify-content: center;
    color: #b0b0b0;
    border-radius: 50%;
    &.highlighted {
      color: #000;
    }
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const CalendarDetails = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
  &>span {
    padding: 2px 5px;
    border-radius: 40px;
    &:hover {
      background: #efefef;
      cursor: pointer;
    }
  }
`;