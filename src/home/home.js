import React from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";
import { db } from "../Firebase/FireBase";
import ParentDisplayer from "./ParentDsiplayer/ParentDisplayer";

class Home extends React.Component {
  state = {
    show: false,
    ourProducts: [],
    selectedProduct: "",
  };

  componentDidMount() {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data(),
        };
      });
      this.setState({ ourProducts: tempProducts });
    });
  }

  clickProductHandler = (product) => {
    let newChanges = { show: !this.state.show, selectedProduct: product };
    this.setState(newChanges);
  };
  render() {
    return (
      <Container>
        <Banner />

        <ParentDisplayer
          show={this.state.show}
          click={() => {
            this.clickProductHandler(undefined);
          }}
          product={this.state.selectedProduct}
        />
        <Content>
          <HeaderContainer>
            {this.state.ourProducts.map((data, index) => {
              if (index <= 1) {
                return (
                  <Product
                    click={() => {
                      this.clickProductHandler(data.product);
                    }}
                    key={data.id}
                    id={data.id}
                    title={data.product.name}
                    price={data.product.price}
                    pic={data.product.image}
                    rating={data.product.rating}
                  />
                );
              }
            })}
          </HeaderContainer>
          <ListContainer>
            {this.state.ourProducts.map((data, index) => {
              if (index >= 0) {
                return (
                  <Product
                    click={() => {
                      this.clickProductHandler(data.product);
                    }}
                    key={data.id}
                    id={data.id}
                    title={data.product.name}
                    price={data.product.price}
                    pic={data.product.image}
                    rating={data.product.rating}
                  />
                );
              }
            })}
          </ListContainer>

        
        </Content>
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  max-width: 90%;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
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
  z-index: 80;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  display: flex;
  overflow: auto;
`;
