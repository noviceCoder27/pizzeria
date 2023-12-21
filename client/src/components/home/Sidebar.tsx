import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {IoLogoGoogleplus,IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'


const Sidebar = () => {
  return (
    <Box position = {'relative'} w = {{base: '100%', xl:'15%'}} backgroundImage={'https://max-themes.net//demos/albertos/images/bg-menu.jpg'} backgroundSize = {'cover'} color = {'white'} p = {{base: '1rem', xl: '0'}}>
            <Flex flexWrap = {'wrap'} h = {'100%'}direction = {{base: 'row',xl: 'column'}} alignItems={'center'} justifyContent={{sm: 'space-around'}}>
                <Image src = 'https://max-themes.net//demos/albertos/images/logo.png' ml = {{base: 'auto', sm: '0'}} mr = {{base: 'auto',sm: '0'}}/>
                <Flex flexWrap = {'wrap'} direction = {{base: 'row',xl: 'column'}} gap = {'0.5rem'} textAlign={'center'} fontSize={'150%'}>
                    <ChakraLink _hover = {{color: '#fab940'}}>
                        <Link to = "/">HOME</Link>
                    </ChakraLink>
                    <ChakraLink _hover = {{color: '#fab940'}}>  
                        <Link to = "/">MENU</Link>
                    </ChakraLink>
                    <ChakraLink _hover = {{color: '#fab940'}}> 
                        <Link to = "/">ABOUT US</Link>
                    </ChakraLink>
                    <ChakraLink _hover = {{color: '#fab940'}}> 
                        <Link to = "/">CONTACT</Link>
                    </ChakraLink>
                </Flex>
                <Flex fontSize={'clamp(1rem,1.5vw,1.5rem)'} gap={'0.5rem'} color = {'#c6b08c'} alignItems={'center'}>
                    <Box cursor = {'pointer'} _hover = {{color: '#fab940'}}>
                        <IoLogoTwitter style = {{fontSize: "105%"}}/>
                    </Box>
                    <Box cursor = {'pointer'}  _hover = {{color: '#fab940'}}>
                        <FaFacebookF style = {{fontSize: "90%"}}/>
                    </Box>
                    <Box cursor = {'pointer'} _hover = {{color: '#fab940'}}>
                        <FaLinkedinIn style = {{fontSize: "105%"}}/>
                    </Box>
                    <Box cursor = {'pointer'} _hover = {{color: '#fab940'}}>
                        <IoLogoGoogleplus style = {{fontSize: "130%"}}/>
                    </Box>
                </Flex>
                <Box w= {'90%'} position = {'absolute'} bottom = {'3rem'} mt= {'1.5rem'} border = {'2px solid #fab940'} borderRadius={'10px'} display = {{base: 'none', xl: 'block'}}></Box>
            </Flex>
        </Box>
  )
}

export default Sidebar
