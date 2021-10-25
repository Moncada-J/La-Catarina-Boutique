import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(
      rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
    ),
    url("https://i.postimg.cc/y82XYsHx/alyssa-strohmann-TS-u-Nw-Jq-E-unsplash.jpg")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        border: 2px solid #9b7665;
        ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
        font-size: 24px;
        font-weight: 500;
        color: #aa8e7c;
`;

const Form = styled.form`
        display: flex;
        flex-direction: column;
`;

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
        margin-bottom: 10px;
`;
const Link = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration: underline;
     custor: pointer;
`;
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: #96563d;
        color: white;
        cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>WELCOME BACK!</Title>
                <Form>
                    <Input placeholder="username" / >
                    <Input placeholder="password" / >
                    <Button>LOG IN</Button>
                    <Link>I FORGOT MY PASSWORD</Link>
                    <Link>I DON'T HAVE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;