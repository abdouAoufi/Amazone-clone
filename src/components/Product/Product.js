import React from "react";
import styled from "styled-components";

function Product({ title, price, rating, pic, id }) {
  let getRating = (ratingNumber) => {
    let ratting = [];
    for (let i = 0; i < ratingNumber; i++) {
      ratting.push("⭐");
    }
    return ratting;
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
      <Picture src={pic} loading="lazy" />
      <ActionSection>
        <AddToCart>Add to cart </AddToCart>
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
