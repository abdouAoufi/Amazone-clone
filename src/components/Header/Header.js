import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShopIcon from "@material-ui/icons/Shop";

function Header() {
  return (
    <div>
      <Container>
        <HeaderLogo>
          <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo" />
        </HeaderLogo>
        <HeaderOptionAdress>
          <OptionLineOne>Hello </OptionLineOne>
          <OptionLineTwo>Select your adress</OptionLineTwo>
        </HeaderOptionAdress>
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>
        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello , nazzary</OptionLineOne>
            <OptionLineTwo>Account & list</OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
            <OptionLineOne>Reuturns</OptionLineOne>
            <OptionLineTwo>& Deliveries</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCard>
            <ShopIcon />
            <CartCount>4</CartCount>
          </HeaderOptionCard>
        </HeaderNavItems>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAdress = styled.div``;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div``;
const HeaderSearch = styled.div`
  display: flex;
`;
const HeaderSearchInput = styled.input``;
const HeaderSearchIconContainer = styled.div``;
const HeaderNavItems = styled.div`
display : flex`;
const HeaderOption = styled.div``;
const HeaderOptionCard = styled.div``;
const CartCount = styled.div``;
