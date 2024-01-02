import {Flex} from '@chakra-ui/react'
import LeftSidebar from '../components/home/Sidebar'
import Hero from '../components/home/Hero'
import { useState } from 'react'

const Home = () => {
  const [openSection,setOpenSection] = useState({});
  return (
    <Flex direction = {{base: 'column',xl: 'row'}} minH={'100dvh'} fontFamily={'Patua One, cursive'}>
        <LeftSidebar setOpenSection = {setOpenSection}/>
        <Hero openSection = {openSection}/>
    </Flex>
  )
}

export default Home
