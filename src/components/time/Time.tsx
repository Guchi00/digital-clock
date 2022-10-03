import React from "react";

import * as S from "./styles";

export type TimeProps = {
    backgroundColor: string;
    title: string;
    value: string;
}

export function Time(INITIAL_STATE: TimeProps) {
  return (
    <>
      <S.Box backgroundColor={INITIAL_STATE.backgroundColor}>
        <S.FirstBoxItem> {INITIAL_STATE.title} </S.FirstBoxItem>
        <S.SecondBoxItem> {INITIAL_STATE.value} </S.SecondBoxItem>
      </S.Box>
      <S.DotsContainer className="dots-container"> 
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
      </S.DotsContainer>
    </>
  );
}
