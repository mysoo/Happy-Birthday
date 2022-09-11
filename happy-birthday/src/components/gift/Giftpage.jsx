import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import giftBackground from "../../assets/img/giftBackground.jpg";
const Section = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 9%;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //   border: 1px solid RED;
  overflow: hidden;
  padding: 0 8% 0 8%;
  // animation: up-down 1.4s infinite ease-in-out alternate;
  // @keyframes up-down {
  //   from {
  //     transform: translatex(0px) translatey(0px);
  //   }
  //   to {
  //     transform: rotate(15deg);
  //   }
  // }
`;

const Giftbox1 = styled.div`
  box-sizing: border-box;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  //   border: 1px solid gray;
  animation: up-dow 0.4s infinite ease-in-out alternate;
  @keyframes up-dow {
    from {
      transform: translatex(0px) translatey(0px);
    }
    to {
      transform: rotate(15deg);
    }
  }
`;
const Giftbox2 = styled.div`
  box-sizing: border-box;
  //   color: white;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  //   border: 1px solid gray;
  animation: up-dow 0.35s infinite ease-in-out alternate;
  @keyframes up-dow {
    from {
      transform: translatex(0px) translatey(0px);
    }
    to {
      transform: rotate(15deg);
    }
  }
`;
const Giftbox3 = styled.div`
  box-sizing: border-box;
  //   color: white;
  font-size: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  //   border: 1px solid gray;
  animation: up-dow 0.4s infinite ease-in-out alternate;
  @keyframes up-dow {
    from {
      transform: translatex(0px) translatey(0px);
    }
    to {
      transform: rotate(15deg);
    }
  }
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

export default function GiftPage() {
  const noGift = () => {
    alert("꽝!!!!!");
  };
  const yesGift = () => {
    alert("선물!!");
    alert("나 만나야 줄거지롱~");
  };
  return (
    <>
      <Section>
        <Giftbox1>
          <CardGiftcardIcon
            color="secondary"
            sx={{ fontSize: "13vw", cursor: "pointer" }}
            onClick={noGift}
          />
        </Giftbox1>
        <Giftbox2>
          <CardGiftcardIcon
            color="secondary"
            sx={{ fontSize: "13vw", cursor: "pointer" }}
            onClick={noGift}
          />
        </Giftbox2>
        <Giftbox3>
          <CardGiftcardIcon
            color="secondary"
            sx={{ fontSize: "13vw", cursor: "pointer" }}
            onClick={yesGift}
          />
        </Giftbox3>
      </Section>
    </>
  );
}
