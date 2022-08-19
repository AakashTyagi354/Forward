import React from 'react'
import styled from "styled-components"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Container = styled.div`
    
    height: 78vh;
    display: flex;
   
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Right = styled.div`
    flex: 1;
`
const VideoLeft = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  
   position: absolute;
   
    
`
const VideoLeftMain = styled.div`
    
    background-color: #13232e;
    
    border-radius: 20px;
    width: 83%;
    display: flex;
    justify-content: center;
    align-items: center;
   
   
`
const Points = styled.div`
    display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
    width: 90%;
    height: 86%;
    margin-top: 80px;
`
const Point = styled.div`
     display: flex;
`


const SubPoint = styled.p`
      letter-spacing: 1px;
    color: gray;
    font-size: 14px;
`

function Video() {
    return (
        <Container>
            <Left>
                <VideoLeftMain>
                    <VideoLeft>
                        <iframe
                            width="90%"
                            height="260"
                            src="https://www.youtube.com/embed/Znpb6jV9EFE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        {/* <iframe width="684" height="385" src="https://www.youtube.com/embed/Znpb6jV9EFE" title="SIH 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </VideoLeft>
                </VideoLeftMain>
            </Left>
            <Right>
                <Points>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}}/>
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>
                    <Point>
                        <CheckCircleOutlineOutlinedIcon style={{color:"green",marginRight:"10px"}} />
                        <SubPoint>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</SubPoint>
                    </Point>

                </Points>
            </Right>
        </Container>
    )
}

export default Video