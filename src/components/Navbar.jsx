import React, { useState } from 'react'
import styled from "styled-components"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logoImg from "../img/WhatsApp_Image_2022-08-11_at_7.03.48_PM-removebg-preview.png"
import Price from "./Price"
import { NavLink } from 'react-router-dom';


const Container = styled.div`
    background-color: #13232e;
    height: 60px;
    display: flex;
    color: #fff;
    align-content: center;
    justify-content: center;
    position: sticky;
    top: 0%;
    z-index: 999;
`
const Left = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 3;
`
const Right = styled.div`
   
    position: relative;
    user-select: none;
    margin-right: 10px;
    letter-spacing: 0.7px;
    

`
const DropBtn = styled.div`
    padding: 15px 20px;
    cursor: pointer;

    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  
    display: flex;
    align-items: center;
    justify-content: space-between;


`
const DropContent = styled.div`
    position: absolute;
    top: 107%;
    left: 0%;
    padding: 10px;
    background-color: #13232e;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
   letter-spacing: 0.7px;
    color: #fff;
    width: 100%;
    z-index: -999;

`
const DropItem = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.7px;
    color: #fff;




    :hover{
       /* border-bottom: 1px solid white;
       width: 90%; */
       font-weight: bold;
    }

`
const Links = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    margin-left: 40px;
   
`
const LinkItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    letter-spacing: 0.7px;
    cursor: pointer;
`
const JoinBtn = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 20px;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    letter-spacing: 0.7px;
    cursor: pointer;
    transition: 0.6s all ease;
    font-weight: bold;
    :hover{
        background-color: #fff;
        color: #13232e;
       
    }
  
`
const Logo = styled.img`
    width: 70px;
    height: 60px;
    margin-left: 70px;
    cursor: pointer;
`


function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const [page,setPage] = useState("Commodities");

    return (
        <>
            <Container>
                <Left>
                    <Logo src={logoImg} />
                </Left>
                <Center></Center>
                <Links>
                    <NavLink to="/home" className="links"onClick={()=>setPage("Commodities")}>
                        <LinkItem>Home</LinkItem>
                    </NavLink>
                    <Right onMouseLeave={e => setIsActive(false)}>
                        <DropBtn onMouseEnter={e => setIsActive(!isActive)} >{page}
                            <ArrowDropDownIcon style={{ color: "white", marginLeft: "3px" }} />
                        </DropBtn>
                        {isActive && (
                            <DropContent>
                                <NavLink to="/input" className="links" onClick={()=>setPage("Natural Gas")}>
                                    <DropItem>Natural Gas</DropItem>
                                </NavLink>
                                <NavLink to="/inputcruid" className="links" onClick={()=>setPage("Crude Oil")}>
                                    <DropItem>Crude Oil</DropItem>
                                </NavLink>
                                <NavLink to='/inputgas' className="links" onClick={()=>setPage("Gasoline")}>
                                    <DropItem>Gasoline</DropItem>
                                </NavLink>
                            </DropContent>
                        )}

                    </Right>
                    <LinkItem>How to use</LinkItem>

                    <JoinBtn>Join us</JoinBtn>

                </Links>
            </Container>
            <Price />
        </>
    )
}

export default Navbar