import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cake from "../../assets/video/cake.mp4";
const Ment = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 1%;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function CakePage() {
  return (
    <>
      <Ment>
        <VideoBox>
          <video height="80%" width="80%" muted autoPlay loop>
            <source src={cake} type="video/mp4" />
          </video>
        </VideoBox>
      </Ment>

      {/* <Wrapper>hover 추가하기</Wrapper> */}
    </>
  );
}
