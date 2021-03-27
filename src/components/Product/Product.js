import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>Ipad pro</Title>
      <Price>$1449</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Picture src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ODxMCfH4yxHT65kUG3xvKwHaHa%26pid%3DApi&f=1" />
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
  max-height: 300px;
  flex-grow: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
const AddToCart = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border-radius: 2px;
  height: 30px;
  border: 2px solid #a88734;
`;
const Picture = styled.img`
  object-fit: contain;
  max-height: 200px;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top : 12px;
`;
