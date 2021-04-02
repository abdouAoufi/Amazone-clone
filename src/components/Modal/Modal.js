import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <Container
      style={{
        visibility: props.show ? "visible" : "hidden",
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      }}
    >
      {props.children}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  transition: 0.4s all ease;
  position: fixed;
  right: 0;
  left: 0;
  top: 55px;
  background-color: white;
  width: 80%;
  height: 80%;
  margin: auto;
  z-index: 100;
  border-radius: 6px;
  padding: 16px;
`;
