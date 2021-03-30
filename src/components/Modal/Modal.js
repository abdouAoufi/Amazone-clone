import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <Container style={{ display: props.show ? "block" : "none" }}>
      {props.children}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
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
