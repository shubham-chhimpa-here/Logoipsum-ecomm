import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
    Heading,
  } from '@chakra-ui/react'
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

  export default function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} background={'transparent'} 
        _hover={{
            bg:'transparent'
        }}
        onClick={onOpen}>
          <FaCartShopping size={'25px'}/>
        </Button>
        <Drawer
        size={'md'}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart (0)</DrawerHeader>
  
            <DrawerBody>
            
           <VStack paddingBlock={'2rem'} gap={'1rem'}>
            <Heading fontSize={'1.2rem'}>Your cart is empty</Heading>
            <Button variant='outline' borderRadius={'0'} mr={3} onClick={onClose}>
              Keep Browsing
            </Button>
           </VStack>
            </DrawerBody>
  
            <DrawerFooter>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }