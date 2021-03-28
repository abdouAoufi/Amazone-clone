import React from "react";
import styled from "styled-components";

const SingleCartItem = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ODxMCfH4yxHT65kUG3xvKwHaHa%26pid%3DApi&f=1"
          alt="product"
        />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>New Apple iPhone 12 Pro Max 512 gb + Carrier </h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>5</CartItemQuantityContainer>
          <CartItemDelete>Delete</CartItemDelete>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>$ 1449</CartItemPrice>
    </Container>
  );
};

export default SingleCartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right : 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;
const CartItemInfo = styled.div``;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
const CartItemQuantityContainer = styled.div``;
const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin-left: 16px;
`;
