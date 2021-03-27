import React from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";

function home() {
  return (
    <Container>
        <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
}

export default home;

const Container = styled.div`
  max-width: 90%;
  margin: auto;
`;


const Banner = styled.div`
  min-height: 450px;
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  padding: 0 10px;
  margin-top: -225px;
  z-index: 100;
  display : flex;
`;
