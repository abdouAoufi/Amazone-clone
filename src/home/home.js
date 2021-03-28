import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";
import { db } from "../Firebase/FireBase";

function Home() {
  const [products, setProduct] = useState([]);

  const getProduct = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data(),
        };
      });
      setProduct(tempProducts);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(products);
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 90%;
  margin: auto;
`;

const Banner = styled.div`
  min-height: 450px;
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  padding: 0 10px;
  margin-top: -225px;
  z-index: 100;
  display: flex;
`;
