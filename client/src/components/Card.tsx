import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react";
import { FaPizzaSlice } from "react-icons/fa6";

interface Props {
    heading: string,
    children: React.ReactNode
}

const Card = ({children,heading}: Props) => {
  return (
    <Flex pos = {'absolute'} direction = {'column'} height={'fit-content'} top = {{base: '2vh', xl: '15vh'}} left = {{base: '2rem',xl: '0'}} right={{base: '2rem', xl: "0"}}>
      <Flex gap={'1rem'} w= {{base: '100%',xl:'fit-content'}} alignItems = {'center'} bgColor={'#242424'} p = {'1rem 2rem'} borderLeft={'5px solid #fab940'} ml= {{base: '0', xl: '5rem'}}>
        <Box color = {'#fab940'} fontSize={'200%'}>
            <FaPizzaSlice />
        </Box>
        <Heading fontFamily={'Patua One, cursive'} letterSpacing={'0.2rem'}>{heading}</Heading>
      </Flex>
      {children}
    </Flex>
  )
}

export default Card
