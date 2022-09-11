import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Letter from "./component/Letter";

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
const ModalBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  //   margin-top: 10%;
  z-index: 6;
  //   height: 100vh;
`;

export default function LetterPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const node = useRef();
  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (modalOpen && node.current && !node.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modalOpen]);

  const handleClick = (event) => {
    const enterPW = prompt("비밀번호를 입력하세요");
    if (enterPW === "18") {
      setModalOpen(true);
      alert("정답!!");
    } else {
      alert("땡!!");
    }
  };
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <Section>
      <div ref={node}>
        <input
          style={{
            width: "200px",
            height: "50px",
            fontSize: "20px",
            background: "#9933ff",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
          }}
          type="button"
          value="편지 보기"
          onClick={handleClick}
        />
      </div>
      <ModalBox>
        {modalOpen && <Letter modalClose={modalClose}></Letter>}
      </ModalBox>
    </Section>
  );
}
