import { Box, Flex, Heading, Text } from "@chakra-ui/react"


const Hero = () => {
  return (
    <Flex flexGrow={'1'} direction = {'column'} pl = {'25vw'} w= {{base:'100%', xl: '85%'}} backgroundImage={'https://max-themes.net//demos/albertos/upload/bg-pizza.jpg'} backgroundSize={'cover'} color = {'white'}>
        <Heading mt = {'25vh'} fontFamily={'Patua One, cursive'} fontSize={'clamp(3rem,4vw,5rem)'} textShadow={'0 0 22px black'}>
            We have the best
        </Heading>
        <Box bgColor={'rgb(36, 36, 36)'} w = {'fit-content'} p= {'0.5rem 2.5rem'} fontSize={'clamp(3rem,5vw,5rem)'} borderRadius={'10px'} color = {'rgb(250, 185, 64)'}>
            <Text>
                Pizza
            </Text>
        </Box>
    </Flex>
  )
}

export default Hero
