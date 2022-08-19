import React from 'react'
import styled from "styled-components"
import chartimage from "../img/Screenshot (796).png"
import Video from './Video'
import EastIcon from '@mui/icons-material/East';
import Footer from './Footer';
import {NavLink} from "react-router-dom"

const Container = styled.div`
    display: flex;
    height: 78vh;
    width: 100%;
    z-index: -99;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Right = styled.div`
    flex: 1;
`
const LeftWrapper = styled.div`
    margin-bottom: 100px;
    margin-right: 40px;
`
const Heading = styled.p`
    font-size: 40px;
    letter-spacing: 1px;
    font-family: 'Anton', sans-serif;

`
const SubHeading = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    color: #929292;
`
const Btn = styled.div`
    border: 2px solid #13232e;
    margin-top: 33px;
    width: 170px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    align-items:center;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.6s all ease;
    :hover{
        background-color: #13232e;
        color: #fff;

    }
`
const ChartImg = styled.img`
    height: 100%;
    width: 90%;
   
`

function Home() {
    return (
        <>
            <Container>
                <Left>
                    <LeftWrapper>
                        <Heading>FORWARD</Heading>
                        <SubHeading>Predict the future control
                            <br /> the present.</SubHeading>
                       <NavLink to="/input" className="links"> <Btn>Get Started <EastIcon style={{marginLeft:"10px"}}/></Btn></NavLink>
                    </LeftWrapper>
                </Left>
                <Right>
                    <ChartImg src={chartimage} />
                </Right>
            </Container>
            <Video />
            <Footer/>
        </>
    )
}

export default Home