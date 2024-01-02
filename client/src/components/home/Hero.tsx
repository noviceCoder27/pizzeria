import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Menu from "../menu/Menu"
import About from "../about/About"
import Contact from "../contact/Contact"


interface Section {
  home?: boolean,
  menu?: boolean,
  about?: boolean,
  contact?: boolean
}
interface Props {
  openSection: Section
}

const Hero = ({openSection}: Props) => {
  return (
    <Flex overflowY = {'scroll'} position = {'relative'} flexGrow={'1'} direction = {'column'} pl = {'25vw'} w= {{base:'100%', xl: '85%'}} height = {'100dvh'} backgroundImage={'https://max-themes.net//demos/albertos/upload/bg-pizza.jpg'} backgroundSize={'cover'} color = {'white'}>
        <Heading mt = {'25vh'} fontFamily={'Patua One, cursive'} fontSize={'clamp(3rem,4vw,5rem)'} textShadow={'0 0 22px black'}>
            We have the best
        </Heading>
        <Box bgColor={'rgb(36, 36, 36)'} w = {'fit-content'} p= {'0.5rem 2.5rem'} fontSize={'clamp(3rem,5vw,5rem)'} borderRadius={'10px'} color = {'rgb(250, 185, 64)'}>
            <Text>
                Pizza
            </Text>
        </Box>
        {openSection?.menu && <Menu />}
        {openSection?.about && <About />}
        {openSection?.contact && <Contact />}
    </Flex>
  )
}

export default Hero
