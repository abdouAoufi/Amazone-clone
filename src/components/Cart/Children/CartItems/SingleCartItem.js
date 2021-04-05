import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import {db} from "../../../../Firebase/FireBase"

const SingleCartItem = ({ id, item , clickMinus , clickAdd}) => {
 
  const addProduct = (product) => {
    const cartItem = db.collection("cartItems").doc(product);
    cartItem.get().then((doc) => {
      if(doc.exists){
        cartItem.update({quantity : item.quantity +1})
      }
    })
  }

  const MinusProduct = (product) => {
    const cartItem = db.collection("cartItems").doc(product);
    cartItem.get().then((doc) => {
      if(doc.exists){
        if(item.quantity > 1){
          cartItem.update({quantity : item.quantity - 1})
        }else{
          deleteItem(cartItem);
        }
      }
    })
  }

  const deleteItem = (item) => {
    item.delete();
  }

  const deleteItemFromButton = (idd) => {
    console.log(idd)
    let itemm = db.collection("cartItems").doc(idd);
    itemm.get().then((doc) => {
      if(doc.exists){
        itemm.delete();
      }
    })
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
            <Manageuantity onClick={() => { addProduct(id) }}>
              <AddCircleOutlineIcon />
            </Manageuantity>
              <Quantity>{item.quantity} </Quantity>
            <Manageuantity onClick={() => {MinusProduct(id)}}>
              <RemoveCircleOutlineIcon />
            </Manageuantity>
          </CartItemQuantityContainer>
          <CartItemDelete onClick={() => {deleteItemFromButton(id)}}>Delete</CartItemDelete>
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
  border-bottom: 2px solid #c4c4c4;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
    cursor: pointer;
  }
`;

 

const Quantity = styled.h3`
  display: inline;
  margin: 0 12px;
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;
const CartItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  div {
    display: inline;
  }
`;
const CartItemDelete = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 6px;
  background-color: #f85959;
  border: none;
  font-size: 1.1rem;
  font-weight : bold ;
  color: white;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin-left: 16px;
  margin-right: auto;
`;

const Manageuantity = styled.div`
cursor : pointer ;
display : grid;
padding : 8px;
align-items : center;
place-items : center;`;
 
