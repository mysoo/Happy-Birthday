import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainImg from "../../assets/img/soomIMG.jpg";

const Section = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
`;
const Paper = styled.div`
  box-sizing: border-box;
  background: white;
  // border: solid 9px #808080;
  // border-radius: 15px;
  width: 100%;
  // height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: up-downs 1.4s infinite ease-in-out alternate;
  @keyframes up-downs {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-20px);
    }
  }
`;

const Ment = styled.div`
  box-sizing: border-box;
  margin-top: 1%;
  width: 65%;
  // height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  // border: 1px solid yellow;
`;

const Date = styled.div`
  box-sizing: border-box;
  color: black;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  // height: 100%;
`;
const Tittle = styled.div`
  box-sizing: border-box;
  color: black;
  font-size: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  font-weight: 600;
`;

const ImgBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 70px;
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
    <Section>
      <Paper>
        <Ment>
          <Tittle>HAPPY BIRTHDAY</Tittle>
          <Tittle style={{ color: "#9933ff" }}>sum_sumsumus!</Tittle>
          <Date>09.16</Date>
          <Date>#Happysum_sumsumusDay</Date>
        </Ment>
        <ImgBox>
          <img
            style={{ height: "30vw", width: "30vw" }}
            alt="수민"
            src={mainImg}
          />
        </ImgBox>
      </Paper>
      {/* <Wrapper>hover 추가하기</Wrapper> */}
    </Section>
  );
}
