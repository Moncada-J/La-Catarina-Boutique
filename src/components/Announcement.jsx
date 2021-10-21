import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #bc91bc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <div>
            <Container>
                Super deal!!! Free Shipping on Order Over $50! 
            </Container>
        </div>
    )
}

export default Announcement
