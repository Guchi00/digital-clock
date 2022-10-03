import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from "react";
// import { DateItems, DateItemsProps } from '../dateItems/DateItems';

import * as S from "./styles";

// const itemsData: DateItemsProps[] = [
//     {
//         wednesday: "Friday",
//         dateMonthYear: "12/08/2022",
//         meridiem: "PM"
//     }
// ]

const getDayNames = (value: number) => {
  const dayNames = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  return dayNames[value];
}

const getLocal = () => {
   const toLocal = new Date();
   return new Intl.DateTimeFormat('en-GB').format(toLocal);
};


const getDayName = () => {
  return getDayNames(new Date().getDay());
};


export function MyDate() {
  const [dateMonthYr, setDateMonthYr] = useState(getLocal());
  const [dayName, setDayName] = useState(getDayName());

  useEffect(() => {
    setInterval(() => {
      setDateMonthYr(getLocal());
      setDayName(getDayName());
    },86400000);
  });

  return (
    <S.Date>
        <S.DateItems>
         {dayName}  
         </S.DateItems>
         <S.DateItems>
         {dateMonthYr}
         {/* meridiem={dateMonthYr[2]} */}
         </S.DateItems>
    </S.Date>
  )
}