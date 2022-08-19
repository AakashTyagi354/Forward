import React from 'react'
import styled from "styled-components"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import footerLogo from "../img/WhatsApp_Image_2022-08-11_at_7.03.48_PM-removebg-preview.png"
const Container = styled.div`
 height: 40vh;
    background-color: #13232e;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
 flex: 9;
   display: flex;
   border-bottom: 1.2px dotted rgba(255, 255, 255, 0.604);
`

const Bottom = styled.div`
 flex: 3;
 flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left = styled.div`
  flex: 3;
`
const Center = styled.div`
flex: 6;
`
const Right = styled.div`
 flex: 3;
`
const Image = styled.img`
    
`
const Title = styled.div`
      font-size: 24px;
    font-family: sans-serif;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.841);
    border-bottom: 1px solid white;
    width: 140px;
`
const SubTitle = styled.div`
     padding-top: 20px;
    width: 400px;
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
`
const TitleRight = styled.div`
      font-size: 24px;
    font-family: sans-serif;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.841);
    border-bottom: 1px solid white;
    width: 140px;
`
const Info = styled.div`
     width: 80%;
`
const Number = styled.div`
      padding-top: 6px;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
`
const Email = styled.div`
      padding-top: 6px;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
`
const Address = styled.div`
     padding-top: 6px;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
`
const Socials = styled.div`
     margin-top: 10px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Social = styled.div`
    width: 35px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover{
   background-color: white;
   color:#13232e;
}
`
const CopyRight = styled.p`
     color: rgba(255, 255, 255, 0.739);
    padding-top: 10px;
    padding-left: 10px;
    letter-spacing: 1px;
`
const FooterImage = styled.img`
    width: 160px;
    height: 160px;
    margin-left: 40px;
`

function Footer() {
    return (
        <Container>
            <Top>
                <Left>
                    {/* <img src={footerimage} className="imageFooter" alt="" /> */}
                    <FooterImage src={footerLogo}/>
                </Left>
                <Center>
                    <Title>About Us</Title>
                    <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente possimus officiis perferendis fugiat! Assumenda cum nihil omnis accusamus odio!</SubTitle>
                </Center>
                <Right>
                    <TitleRight>Contact Us</TitleRight>
                    <Info>
                        <Email>suport@gamil.com</Email>
                        <Number>+91-9008218354</Number>
                        <Address>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Address>
                    </Info>
                    <Socials>
                        <Social>
                            <YouTubeIcon className='footericons' style={{color:"white"}}/>
                        </Social>
                        <Social>
                            <LinkedInIcon className='footericons' style={{color:"white"}} />
                        </Social>
                        <Social>
                            <TwitterIcon className='footericons' style={{color:"white"}} />
                        </Social>
                    </Socials>
                </Right>
            </Top>
            <Bottom>
                <CopyrightOutlinedIcon style={{ color: "white" }} /> <CopyRight>2020-2024 Forword. All right reserved</CopyRight>
            </Bottom>
        </Container>
    )
}

export default Footer