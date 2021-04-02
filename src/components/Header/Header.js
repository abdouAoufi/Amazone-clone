import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShopIcon from "@material-ui/icons/Shop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function Header(props) {
  let searchInput = "";
 const changeHandler = (event) => {
  searchInput = (event.target.value);
 }
  return (
    <div>
      <Container>
        <HeaderLogo>
          <Link to="/">
            <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo" />
          </Link>
        </HeaderLogo>
        <HeaderOptionAdress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello </OptionLineOne>
            <OptionLineTwo>Select your adress</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAdress>

        <HeaderSearch>
          <HeaderSearchInput type="text" placeholder="Enter your search here " onChange={changeHandler}/>
          <HeaderSearchIconContainer onClick={() => {props.searchWordBack(searchInput)}}>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>

        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello , Maissa </OptionLineOne>
            <OptionLineTwo>Account & list</OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
            <OptionLineOne>Reuturns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
          <HeaderOptionCard>
            <Link to="/cart">
              <ShopIcon />
              <CartCount>{props.quantity}</CartCount>
            </Link>
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
  justify-content: space-between;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAdress = styled.div`
  align-items: center;
  display: flex;
  padding-left: 9px;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 0.8;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1  ;
  font-size : 1rem;
  padding-left : 5px;
  border: none;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: grid;
  align-items: center;
  place-items: center;
  cursor: pointer;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding-left : 9px ;
  padding-right : 9px
  pading-top : 10px;
  padding-bottom : 10px
  `;

const HeaderOptionCard = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
  padding-left: 9px;
  a {
    display: flex;
    text-decoration: none;
    color: white;
  }
`;

const CartCount = styled.div`
  padding-left: 9px;
  font-weight : 700;
  color : #f08804;
`;

 