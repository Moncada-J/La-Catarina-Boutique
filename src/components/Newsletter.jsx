import React from 'react'
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: #a07ba0;
${mobile({ fontSize: "45px" })}
`;

const Desc = styled.div`
font-size: 21px;
font-weight: 300;
margin-bottom: 20px;
 ${mobile({ textAlign: "center", fontSize: "14px" })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "70%" })}
`;

const Input = styled.input`
border: none;
font-size: 15px;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
color: white;
background-color: #997499;
`;


export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Never miss an update from La Catarina Boutique. 
                <br />Subscribe now!</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default Newsletter;
