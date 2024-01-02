import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
  } from '@chakra-ui/react'
import CartItem from './CartItem'

interface Props {
    isOpen: boolean,
    onClose: () => void
}

const CartDrawer = ({isOpen,onClose}: Props) => {
    return (
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your selected items</DrawerHeader>
        <DrawerBody overflowY={'scroll'}>
            <Flex direction={'column'} gap = {'1rem'}>
                <CartItem />
            </Flex>
        </DrawerBody>
        <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
            </Button>
            <Button bgColor='#fab940' _hover = {{bgColor: "#eea51e"}}>Check Out</Button>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>
    )
}

export default CartDrawer
