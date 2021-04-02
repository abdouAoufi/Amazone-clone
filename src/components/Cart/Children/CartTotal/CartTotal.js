import React from "react";
import styled from "styled-components";

function CartTotal({ cartItems }) {
  let quantity = 0;
  let totalMoney = 0;
  let productMoney = 0;
  let shippingMoney = 0;
  let cuppon = Math.floor(Math.random() * 21)
  cartItems.forEach((singleProduct) => {
    quantity += singleProduct.product.quantity;
    productMoney += singleProduct.product.price * singleProduct.product.quantity; 
  });
  shippingMoney = quantity * ( productMoney - productMoney * 90 / 100) ;
  totalMoney = ( shippingMoney ) + ( productMoney ) ;
  const MoneyAfterCuppon = totalMoney - (totalMoney * cuppon) / 100;

  return (
    <Container>
      <Title>Cart total  </Title>
      <hr />
      <IformationContainer>
        <h2>
          Total amount :<span>{quantity} </span>
          products
        </h2>
      </IformationContainer>

      <IformationContainer>
        <h2>
          Total invested in product :<span>{productMoney.toFixed(2) } </span>$
        </h2>
      </IformationContainer>

      <IformationContainer>
        <h2>
          Total invested in shipping :<span>{(shippingMoney).toFixed(2)} </span>$
        </h2>
      </IformationContainer>

      <IformationContainer>
        <h2>
          Total money :<span>{totalMoney.toFixed(2)} </span>$
        </h2>
      </IformationContainer>

      <IformationContainer>
        <h2>
          Money to pay  { - cuppon} % :<span>{MoneyAfterCuppon.toFixed(2)} </span>$
        </h2>
      </IformationContainer>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  height: auto;
  max-height : 250px;
  background-color: white;
  flex: 0.4;
  padding: 20px;
`;
const Title = styled.h1`
  margin-bottom: 8px;
`;
const IformationContainer = styled.div`
  margin-top: 8px;
  h2 {
    font-size: 1rem;
    color: black;
    font-weight: 400;
    display: inline;
  }

  span {
    font-weight : bold ;
    margin-left: 8px;
    color: #007185;
    font-size: 1.4rem;
  }
`;


// ! 2
