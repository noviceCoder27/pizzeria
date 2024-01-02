import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import {IoLogoGoogleplus,IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import React, { useState } from "react";
import CartDrawer from "../cart/CartDrawer";

interface Props {
    setOpenSection: React.Dispatch<React.SetStateAction<object>>
}

const Sidebar = ({setOpenSection}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showOptions,setShowOptions] = useState(false);

    return (
        <Box position = {'relative'} w = {{base: '100%', xl:'15%'}} backgroundImage={'https://max-themes.net//demos/albertos/images/bg-menu.jpg'} backgroundSize = {'cover'} color = {'white'} p = {{base: '1rem', xl: '0'}}>
                <Flex flexDirection = {'column'} flexWrap = {'wrap'} h = {'100%'}direction = {{base: 'row',xl: 'column'}} alignItems={{base: 'start', xl:'center'}} justifyContent={{sm: 'space-around'}}>
                    <Image src = 'https://max-themes.net//demos/albertos/images/logo.png'  alt = "Logo" loading = {"lazy"}/>
                    <Box position={'absolute'} top = {'2rem'} left = {'1rem'} fontSize={'150%'} cursor={'pointer'} onClick={onOpen}  bgColor = {'black'} border = {'2px solid rgb(250, 185, 64)'} p = {'0.5rem'} borderRadius={'50%'} color = {'rgb(250, 185, 64)'}>
                        <BsCart3 />
                    </Box>
                    <Box pos={'absolute'} right={'2rem'} top = {'5rem'} display={{base: 'block', xl: 'none'}} onClick={() => setShowOptions(prev => !prev)}>
                        <GiHamburgerMenu />
                    </Box>
                    <Flex mt = {{base: '2rem', mt: '0'}} direction = {'column'} gap = {'0.5rem'} textAlign={'center'} fontSize={'150%'} display={{base: `${showOptions? 'flex': 'none'}`, xl: 'flex'}}>
                        <Text _hover = {{color: '#fab940'}} cursor={'pointer'} onClick={() =>setOpenSection({home: true})}>
                            HOME
                        </Text>
                        <Text _hover = {{color: '#fab940'}} cursor={'pointer'} onClick={() =>setOpenSection({menu: true})}>
                            MENU
                        </Text>
                        <Text _hover = {{color: '#fab940'}} cursor={'pointer'} onClick={() =>setOpenSection({about: true})}>
                            ABOUT US
                        </Text>
                        <Text _hover = {{color: '#fab940'}} cursor={'pointer'} onClick={() =>setOpenSection({contact: true})}>
                            CONTACT
                        </Text>
                    </Flex>
                    <Flex my = {{base: '2rem', mt: '0'}} fontSize={'clamp(1rem,1.5vw,1.5rem)'} gap={'0.5rem'} color = {'#c6b08c'} alignItems={'center'} display={{base: `${showOptions? 'flex': 'none'}`, xl: 'flex'}}>
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
                <CartDrawer isOpen = {isOpen} onClose = {onClose}/>
            </Box>
    )
}

export default Sidebar
