import { Badge } from '@material-ui/core'
import { Search, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-item:center;
justify-content:space-between;
${mobile({ padding: "10px 0px" })}
`
const Left=styled.div`
flex:1;
display:flex;
align-item:center;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
padding-top:14px;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border:0.5px solid #000000;
display:flex;
align-item:center;
margin-left:25px;
padding:5px;

`

const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`

const Center=styled.div`
flex:1;
text-align:center;
`

const Logo = styled.h3`
font-weight:bold;
font-size:14px;
${mobile({ fontSize: "24px" })}
`

const Right=styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                <Search style={{paddingTop:"6px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>URSHOP.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingBasketOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar