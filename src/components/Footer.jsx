import React from 'react'
import styled from 'styled-components'
import './Footer.css';
import { Facebook, Instagram, Twitter, 
    Pinterest, Room, Phone, MailOutline } from "@material-ui/icons";


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
    bottom: 65px;
    margin-left: 30px;
    margin-right: 7%;
`;

const Logo = styled.img`
width: 110%;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;

`;

const SocialIcon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;


`;

const Center = styled.div`
    flex; 1;
    padding: 20px;
    margin-top: 60px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom:10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 100%;
`;


export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src="https://i.imgur.com/JVXAbzq.png"/>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon className="instagram">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Home Decor</ListItem>
                    <ListItem>Jewlery Accessories</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem> <Room style={{marginRight: "10px"}}/>Seattle, WA, US</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/> 360-001-0002</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/> contact@lacatarinaboutique.co </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" / >
            </Right>
        </Container>
    )
}

export default Footer;
