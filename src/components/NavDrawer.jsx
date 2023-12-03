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
import { Link } from 'react-router-dom'

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon size="2rem" />
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
              <Link to={'/categories'}>CATEGORIES</Link>
              <Link to={'/products'}>PRODUCT PAGE</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}