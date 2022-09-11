import * as React from "react";

import styled from "styled-components";

const Section = styled.div`
  border: 2px solid yellow;
  width: 90%;
  background: white;
`;
const LetterBox = styled.p`
  width: 100%;
  text-decoration: underline;
`;
const CloseButton = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding-bottom: 1%;
`;

export default function Letter(props) {
  const { modalClose } = props;

  return (
    <Section>
      <LetterBox>
        <CloseButton>
          <button
            style={{ borderRadius: "100px", border: "none" }}
            onClick={modalClose}
          >
            X
          </button>
        </CloseButton>
        TO. 수민
        <br />
        ㅋㅋㅋ수민아 안녕 나는 당연히 수현이야ㅋㅋ
        <br />
        역시 디자인은 디자이너가 해야 하나봐,,, 내 창작의 한계야,,,
        <br />
        그래도 색다른 경험이지? 아직 아무도 웹페이지를 만들어주지는 않았을거햐
        흑흑
        <br />
        앞으로 더 화려하게 꾸며서 완성에 가깝게 만들어줄게,,,그게 5년 후가 될지
        10년 후가 될지는 모르겠지만ㅋㅋㅋㅋㅋ 앞으로를 기대해,,,,제발,,ㅎㅎ
        <br />
        이번 2022년도 그 중에서도 특히 이번 하반기에 은아랑 나 모두 취업준비를
        하게 되어서 자주 못보게 된 것 같아서 너무 아쉬워ㅠㅜ
        <br />
        취업이 머라구,,아니지,, 취업이 대단하시지,,,흑흑ㅎ그 빠르게 취업을
        하고싶어 놀기 위해서~!!ㅋㅋㅋㅋ
      </LetterBox>
    </Section>
  );
}
