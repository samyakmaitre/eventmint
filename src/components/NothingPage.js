import React from 'react';  
import styled from '@emotion/styled';  
import { motion } from 'framer-motion';  

const Container = styled(motion.div)`  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  height: 100vh;  
  background-color: #f0f0f0;  
`;  

const Astronaut = styled(motion.img)`  
  width: 200px;  
  margin-bottom: 20px;  
`;  

const Message = styled(motion.h1)`  
  font-size: 3rem;  
  font-weight: bold;  
  color: #333;  
`;  

const NothingPage = () => {  
  const containerVariants = {  
    hidden: { opacity: 0 },  
    visible: { opacity: 1, transition: { duration: 0.5 } },  
  };  

  const astronautVariants = {  
    float: {  
      y: [0, -20, 0],  
      transition: {  
        duration: 3,  
        ease: "easeInOut",  
        loop: Infinity,  
      }  
    }  
  };  

  return (  
    <Container   
      variants={containerVariants}   
      initial="hidden"   
      animate="visible"  
    >  
      <Astronaut   
        src="astronaut.png"   
        alt="Astronaut"   
        variants={astronautVariants}   
        animate="float"  
      />  
      <Message   
        initial={{ opacity: 0, y: -20 }}   
        animate={{ opacity: 1, y: 0 }}   
        exit={{ opacity: 0, y: -20 }}  
      >  
        404 - Page Not Found  
      </Message>  
    </Container>  
  );  
};  

export default NothingPage;
