import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
    
`;
const Info = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
const Title = styled.h1`
    // color: #fbf9fc;
    //  color: #59575b;
  -webkit-text-fill-color: #fbf9fc; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.3vmin;
  -webkit-text-stroke-color: #59575b;
    margin-bottom: 10px;
    
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    border: 0.3vmin solid #59575b;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;

    
`;

export const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem