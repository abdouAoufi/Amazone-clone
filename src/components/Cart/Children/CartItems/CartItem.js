import React from "react";
import styled from "styled-components";
import SingleCartItem from "./SingleCartItem";

function CartItem({ cartItems }) {
  return (
    <Container>
      <Title>Shopping cart </Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <SingleCartItem key={item.id} id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  border: 1px solid magenta;
  background-color: white;
  flex-grow: 0.8;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;
const ItemsContainer = styled.div``;

// ! 1
