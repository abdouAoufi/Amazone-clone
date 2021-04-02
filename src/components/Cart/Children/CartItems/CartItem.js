import React from "react";
import styled from "styled-components";
import SingleCartItem from "./SingleCartItem";

function CartItem({ cartItems }) {
  const removeProduct = () => {
    console.log("removeProduct");
  };

  const addProduct = (product) => {
    console.log("addProduct [cartItems]", product);
  };
  return (
    <Container>
      <Title>Shopping cart </Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item, index) => (
          <SingleCartItem
            key={index}
            id={item.id}
            item={item.product}
            clickAdd={() => {
              addProduct(item);
            }}
            clickMinus={removeProduct}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  background-color: white;
  flex: 0.6;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;
const ItemsContainer = styled.div``;

// ! 1
