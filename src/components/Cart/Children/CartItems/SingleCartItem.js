import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const SingleCartItem = ({ id, item }) => {
  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(i);
  }

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="product" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select value={item.quantity}>
              {options.map((item) => {
                return <option value={item}> Qty : {item}</option>;
              })}
            </select>
          </CartItemQuantityContainer>
          <CartItemDelete>Delete</CartItemDelete>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${item.price}</CartItemPrice>
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
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;
const CartItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items : center;
`;
const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  }
  select:focus{
    outline : none;
  }
`;
const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin-left: 16px;
  margin-right: auto;
`;
