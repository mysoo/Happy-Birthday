import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ment = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 3%;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px solid RED;
  overflow: hidden;
`;

const Tittle = styled.div`
  box-sizing: border-box;
  color: white;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  //   border: 1px solid gray;
`;

const Content = styled.div`
  position: absolute;
  box-sizing: border-box;
  // font-family: 'Crimson Text';
  color: white;
  font-size: 30px;
`;

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 35px;
  color: black;
  text-decoration: none;
`;

export default function Home() {
  return (
    <>
      <Ment>
        <Tittle>수민아, 생일축하해</Tittle>
        {/* 
        <Content>
          Ment은 지속가능한 공간을 큐레이팅하여, <br /> 한국 도시의 지속가능한
          발전을 돕습니다.
        </Content> */}
      </Ment>

      {/* <Wrapper>hover 추가하기</Wrapper> */}
    </>
  );
}
