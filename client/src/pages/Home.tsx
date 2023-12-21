import {Flex} from '@chakra-ui/react'
import LeftSidebar from '../components/home/Sidebar'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <Flex direction = {{base: 'column',xl: 'row'}} minH={'100dvh'} fontFamily={'Patua One, cursive'}>
        <LeftSidebar />
        <Hero />
    </Flex>
  )
}

export default Home
