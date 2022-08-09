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

export default function CakePage() {
  return (
    <>
      <Ment>
        {/* <Tittle>수민아, 생일축하해</Tittle> */}

        {/* <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
          <iframe
            src="https://giphy.com/embed/Lkw7QvEHjNeiHN2poQ"
            width="100%"
            height="100%"
            style="position:absolute"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div> */}
        <p>
          <a href="https://giphy.com/embed/Lkw7QvEHjNeiHN2poQ">vccia GIPHY</a>
        </p>
      </Ment>

      {/* <Wrapper>hover 추가하기</Wrapper> */}
    </>
  );
}
