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
        
      </LetterBox>
    </Section>
  );
}
