import styled from "styled-components";
import {ArrowLeftOutlined} from "@material-ui/icons"
import {ArrowRightOutlined} from "@material-ui/icons"
import { useState } from "react";
import { sliderItems } from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({ display: "none" })}
`

const Arrow = styled.div`
width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex*-100}vw)
`

const Slide = styled.div`
display:flex;
align-item:center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg}
`

const ImageContainer = styled.div`
flex:1;
height:100%;

`

const Image = styled.img`
height:80%;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`

const Title = styled.h1`
font-size:50px;
font-weight:bold;
font-family:cursive;
text-align:center;
`

const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-family:cursive;
font-weight:500;
letter-spacing:3px;
text-align:center;
`

const Button = styled.button`
font-family:cursive;
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
margin-left:100px;`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 :0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Show Now</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")} >
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider