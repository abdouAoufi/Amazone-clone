import React from "react";
import styled from "styled-components";
import { db } from "../../Firebase/FireBase";

function Product({ title, price, rating, pic, id }) {
  let getRating = (ratingNumber) => {
    let ratting = [];
    for (let i = 0; i < ratingNumber; i++) {
      ratting.push("⭐");
    }
    return ratting;
  };

  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      console.log(doc.exists)
      if (doc.exists) {
        console.log("the document does exist !!!!! ")
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: pic,
          quantity: 1,
          price: price,
        });
      }
    });
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Price>$ {price}</Price>
      <Rating>
        {getRating(Math.floor(rating)).map((star) => {
          return star;
        })}
      </Rating>
      <Picture src={pic} />
      <ActionSection>
        <AddToCart onClick={addToCart}> Add to cart </AddToCart>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 1;
  max-height: 350px;
  flex-grow: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 700;
  margin-top: 3px;
`;
const Rating = styled.div`
  font-size: 18px;
  margin: 8px 0;
`;
const AddToCart = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border-radius: 2px;
  height: 30px;
  cursor : pointer ;
  border: 2px solid #a88734;
`;
const Picture = styled.img`
  object-fit: contain;
  max-height: 230px;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;
