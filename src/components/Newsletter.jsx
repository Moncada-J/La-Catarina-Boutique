import React from 'react'
import styled from 'styled-components';
import { Send } from '@material-ui/icons';

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
`;
const Desc = styled.div`
`;
const InputContainer = styled.div`
`;
const Input = styled.input`
`;
const Button = styled.button`
`;


export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Never miss an update on your 
                favorite products from La Catarina Boutique.</Desc>
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
