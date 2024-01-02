import { Box,Flex, InputGroup,InputLeftAddon,InputRightAddon, Input, Image } from "@chakra-ui/react"


const CartItem = () => {
  return (
    <Box>
        <Image src = "https://t4.ftcdn.net/jpg/02/37/44/65/360_F_237446549_k7qJOJx9GqgtLAufaUcU7QhD5eDImi9N.jpg" alt = "Pizza"/>
        <Flex justifyContent={'center'}>
            <InputGroup w= {'60%'} mt = {'1rem'}>
                <InputLeftAddon cursor = {'pointer'}>
                    -
                </InputLeftAddon>
                <Input type='number' />
                <InputRightAddon cursor = {'pointer'}>
                    +
                </InputRightAddon>
            </InputGroup>
        </Flex>
    </Box>
  )
}

export default CartItem
