import React from "react";
import styled from "styled-components";
import SingleCartItem from "./SingleCartItem";

function CartItem() {
  return (
    <Container>
      <Title>Shopping cart </Title>
      <hr />
      <ItemsContainer>
        <SingleCartItem />
      </ItemsContainer>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  border: 1px solid magenta;
  height: 300px;
  background-color: white;
  flex-grow: 0.8;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.h1``;
const ItemsContainer = styled.div``;

// ! 1
