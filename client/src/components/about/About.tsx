import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Card from "../Card"

const About = () => {
  return (
    <Card heading = {"About Us"}>
        <Flex direction = {"column"} p = {'2rem 4rem'} bgColor={'#fcf6ec'} color = {'black'} gap = {"1.5rem"}>
            <Heading fontFamily={'Patua One, cursive'}>WE USE FRESH INGREDIENTS.<br/>WHY IS THAT?</Heading>
            <Text color = {'#333'} fontFamily={'Merriweather,serif'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text color = {'#333'} fontFamily={'Merriweather,serif'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Image src = "https://max-themes.net//demos/albertos/upload/vegies.jpg" alt = "Vegetables" loading = {'lazy'} w= {'40%'} ml = {"auto"} mr = {"auto"} />
            <Heading fontFamily={'Patua One, cursive'}>OUR TEAM</Heading>
            <Text color = {'#333'} fontFamily={'Merriweather,serif'}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Image src = "https://max-themes.net//demos/albertos/upload/team.jpg" alt = "People" loading = {'lazy'} w = {'40%'} ml = {"auto"} mr = {"auto"}/>
        </Flex>
    </Card>
  )
}

export default About
