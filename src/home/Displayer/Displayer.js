import React from "react";
import styled from "styled-components";
import image from "../../assets/portrait.jpg";

const Displayer = ({ title, date, price, rating, imageSource }) => {
  console.log(imageSource);
  return (
    <Container>
      {/* <ClosePage></ClosePage> */}
      <TextContainer>
        <Title>{title} </Title>
        <Price>Price : <span>{price}$</span></Price>
        <Rating>Rating : {getRating(rating)}</Rating>
      </TextContainer>
      <ImageContainer>
        <img src={imageSource} alt="product" />
      </ImageContainer>
    </Container>
  );
};

let getRating = (ratingNumber) => {
  let ratting = [];
  for (let i = 0; i < ratingNumber; i++) {
    ratting.push("⭐");
  }
  return ratting;
};

export default Displayer;

const Container = styled.div`
  display: flex;
  width: 100%;
  height : 100%;
`;

const TextContainer = styled.div`
  flex-grow: 0.4;
  h3 {
    margin-bottom: 9px;
  }
`;
const Title = styled.h2`
margin-bottom : 12px;
font-size: 24px !important;
line-height: 32px !important;
box-sizing: border-box;
font-weight : 400`;

const Price = styled.p`
color: #565959 !important;
font-size: 14px !important;
line-height: 20px !important;
margin-bottom : 12px;

span{
  color: #B12704 !important;
  font-size: 18px !important;
line-height: 24px !important;
font-weight : 600;
}
`

const Rating = styled.div``



const ImageContainer = styled.div`
  flex-grow: 0.6;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  img {
    margin: 0 auto;
    max-width: 600px;
    max-height: 500px;
    object-fit: contain;
  }
`;
