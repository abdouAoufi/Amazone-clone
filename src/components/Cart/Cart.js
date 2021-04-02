import React from "react";
import styled from "styled-components";
import CartItem from "./Children/CartItems/CartItem";
import CartTotal from "./Children/CartTotal/CartTotal";

function Cart({ cartItems }) {
  return (
    <Container>
      <CartItem cartItems={cartItems}   />
      <CartTotal cartItems={cartItems} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
`;
