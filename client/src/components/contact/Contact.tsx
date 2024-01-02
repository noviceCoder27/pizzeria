import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Card from "../Card"


const Contact = () => {
  return (
    <Card heading = {"CONTACT"}>
        <Flex direction = {"column"} p = {'2rem 4rem'} bgColor={'#fcf6ec'} color = {'black'} gap = {"2rem"} fontFamily={'Merriweather,serif'}>
            <Box lineHeight={'2rem'}>
                <Heading fontFamily={'Patua One, cursive'}>ADDRESS</Heading>
                <Text mt = {'1rem'}>3021 Lady Bug Drive</Text>
                <Text>Brooklyn, NY 11230, USA</Text>
            </Box>
           <Box>
                <Heading fontFamily={'Patua One, cursive'}>CALL OR WRITE</Heading>
                <Flex gap = {'1rem'} mt = {'1rem'} lineHeight={'2rem'} wrap = {'wrap'}>
                    <Text fontWeight={'600'}>Phone:</Text>
                    <Text>00386 40 868 300</Text>
                </Flex>
                <Flex gap = {'1rem'} wrap = {'wrap'}>
                    <Text fontWeight={'600'}>Email:</Text>
                    <Text>info@somedomain.com</Text>
                </Flex>
           </Box>
           <Box>
                <Heading fontFamily={'Patua One, cursive'}>OPENING HOURS</Heading>
                <Flex gap = {'1rem'} mt = {'1rem'} lineHeight={'2rem'}>
                    <Text fontWeight={'600'}>Mon - Fr:</Text>
                    <Text>8am - 11pm:</Text>
                </Flex>
                <Flex gap = {'1rem'}>
                    <Text fontWeight={'600'}>Saturday:</Text>
                    <Text>8am - 1am</Text>
                </Flex>
                <Flex gap = {'1rem'} mt = {'0.2rem'}>
                    <Text fontWeight={'600'}>Sunday:</Text>
                    <Text>(closed)</Text>
                </Flex>
           </Box>
        </Flex>
    </Card >
  )
}

export default Contact
