import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { PiPizzaLight } from "react-icons/pi";


const Pizzas = () => {
  return (
    <Box p = {'2rem 4rem'} bgColor={'#fcf6ec'} color = {'black'} >
      <Box w= {'fit-content'} pos={'relative'}>
        <Image src = "https://max-themes.net//demos/albertos/images/frame.png" alt = "Pizza Image" loading= {"lazy"}/>
        <Image src = "https://max-themes.net//demos/albertos/upload/bg-pizza.jpg" pos = {'absolute'} top = {'1.9rem'} left = {'1.9rem'} w = {'83.5%'} height={'78%'} loading = {'lazy'} />
      </Box>
      <Flex alignItems={'center'} gap = {'1rem'} mt = {'2rem'}>
          <PiPizzaLight size = {'50px'}/>
          <Text fontSize={'clamp(1.2rem,5vw,2rem)'}>Hawaii</Text>
      </Flex>
      <Text color = {'#333'} ml = {'4rem'} fontFamily={'Merriweather,serif'} w = {{base: "70%",xl: "25%"}} fontSize={'clamp(0.8rem,3vw,1rem)'}>Pineapple, mushrooms, black olives, tomato sauce</Text>
      <Flex alignItems={'center'} wrap={'wrap'}>
          <Text mt = {'2rem'} ml = {'4rem'} fontSize={'clamp(1.2rem,3vw,1.5rem)'} color = {'#9b040c'}>&#8377; 250</Text>
          <Button mt = {'2rem'} ml = {'4rem'} bgColor={'#fab940'} _hover = {{bgColor: "yellow.300"}} fontSize={'clamp(1rem,3vw,1.2rem)'}>Add to cart</Button>
      </Flex>
  </Box>
  )
}

export default Pizzas
