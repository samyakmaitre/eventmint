import React, { Component } from 'react';  
import styled, { keyframes } from 'styled-components';  


const float = keyframes`  
  0% {  
    transform: translateY(0);  
  }  
  50% {  
    transform: translateY(-20px);  
  }  
  100% {  
    transform: translateY(0);  
  }  
`;  


const Container = styled.div`  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  height: 100vh;  
  background-color: #f0f0f0;  
`;  

const Astronaut = styled.img`  
  width: 200px;  
  animation: ${float} 3s ease-in-out infinite;  
`;  

const Message = styled.h1`  
  font-size: 3rem;  
  font-weight: bold;  
  margin-top: 2rem;  
`;  

class NothingPage extends Component {  
  render() {  
    return (  
      <Container>  
        <Astronaut src="astronaut.png" alt="Astronaut" />  
        <Message>404 - Page Not Found</Message>  
      </Container>  
    );  
  }  
}  

export default NothingPage;
