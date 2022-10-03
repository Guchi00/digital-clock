import React, { useEffect, useState } from "react";
import { Time, TimeProps } from "../time/Time";
import { MyDate as myDate } from "../mydate/MyDate";

import * as S from "./styles";

// export const data: TimeProps[] = [
//   {
//     backgroundColor: "azure;",
//     title: 12,
//     value: "Hours",
//   },
//   {
//     backgroundColor: "azure;",
//     title: 30,
//     value: "Minutes",
//   },
//   {
//     backgroundColor: "azure;",
//     title: 6,
//     value: "Seconds",
//   },
//   {
//     backgroundColor: "azure;",
//     title: 1000,
//     value: "Milli-Seconds",
//   },
// ];

const format = () => {
  const current = new Date();

  let hr = current.getHours();
  let min = current.getMinutes();
  let ss = current.getSeconds();
  let milliss = current.getMilliseconds();

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

  return {
    hour,
    minutes,
    seconds,
    milliSeconds,
    meridiem
  };
};


export function Timee() {
    const [time, setTime] = useState(format())

    useEffect(() => {
        setInterval(() => {
            setTime(format());
        }, 1);
    });

    const { meridiem, ...timeWithoutMeridiem } = time; 
  return (
    <S.BoxAndDotCon>
      {Object.entries(timeWithoutMeridiem).map((item) => (
        <Time
          key={item[0]}
          backgroundColor={"Azure"}
          title={item[1]}
          value={item[0]}
        />
        )
      )}
       <S.amAndPm>{meridiem}</S.amAndPm>
    </S.BoxAndDotCon>
  );
}

