import React from "react";
import { Timee } from "../timee/Timee";
import { MyDate as MyDate } from "../mydate/MyDate";
import { Time } from "../time/Time";

import * as S from "./styles";

const clock = () => {
  const current = new Date();

  let hr = current.getHours();
  let min = current.getMinutes();
  let ss = current.getMinutes();
  let milliss = current.getMilliseconds();
  let currentDay = current.getDay();

  let meridiem = "AM";
  if (hr === 0) {
    hr = 12;
    meridiem = "AM";
  } else if (hr === 12) {
    meridiem = "PM";
  } else if (hr > 12) {
    hr = hr - 12;
    meridiem = "PM";
  }

  let hour = `${hr < 10 ? `0${hr}` : hr}`;
  let minutes = `${min < 10 ? `0${min}` : min}`;
  let seconds = `${ss < 10 ? `0${ss}` : ss}`;
  let milliSeconds = `${milliss < 10 ? `0${milliss}` : milliss}`;
  let recentDay = `${currentDay < 10 ? `0${currentDay}` : currentDay}`;
  let date = current.toLocaleDateString();
};

const getTheDayName = (value: number) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return dayNames[value];
};

// console.log(setInterval(clock, 1000));

export function Left() {
  return (
    <>
      <S.DateAndTimeBox>
        <Timee />
        <MyDate />
      </S.DateAndTimeBox>
    </>
  );
}
