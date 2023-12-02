import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    VStack,
    useDisclosure,
  } from '@chakra-ui/react'
import { Logo } from './Footer'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef}  onClick={onOpen}>
            <HamburgerIcon size="2rem"/>
        </Button>
        <Drawer
        
        size='full'
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader>
                <Box as='a' href='/' >

                <Logo />
                </Box>
            </DrawerHeader>
  
            <DrawerBody>
                <VStack paddingTop={'2rem'} gap={'1rem'}>
                    
                <Box as="a" href="/categories">CATEGORIES</Box>
                    <Box as="a" href="/products">PRODUCT PAGE</Box>
                </VStack>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }