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
  Box,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cart, setCart } = useContext(CartContext);
  console.log(cart)

  const handleRemoveFromCart = (id) => {
    
    let newCart = cart.filter((item, index)=> id != index)
    setCart(newCart)
  }

  return (
    <>
      <Button ref={btnRef} background={'transparent'}
        _hover={{
          bg: 'transparent'
        }}
        onClick={onOpen}>
        <FaCartShopping size={'25px'} />
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
            {
              cart?.length ? <>

                <VStack paddingBlock={'2rem'} gap={'1rem'}>
                  {
                    cart.map((item, index) => {
                      return <HStack key= {index} justify={'space-between'}  border={'1px solid black'} maxWidth={'300px'} width={'300px'} padding={'1rem'} position={'relative'}>
                        <Image
                          rounded={'md'}
                          alt={'product image'}
                          src={item.img}
                          fit={'cover'}
                          align={'center'}
                          w={'50px'}
                        />
                        <Text> {item.description}</Text>
                        <Heading fontSize={'1rem'}>${item.price}</Heading>
                        <Button
                          onClick={() => handleRemoveFromCart(index)}
                          position={'absolute'}
                          top={'-10px'}
                          right={'-30px'}
                          width={
                            '20px'
                          } height={'20px'} fontWeight={'bold'} bg={'none'} mr={3} >
                          X
                        </Button>
                      </HStack>
                    })
                  }
                </VStack>
              </> :
                <>
                  <VStack paddingBlock={'2rem'} gap={'1rem'}>
                    <Heading fontSize={'1.2rem'}>Your cart is empty</Heading>
                    <Button variant='outline' borderRadius={'0'} mr={3} onClick={onClose}>
                      Keep Browsing
                    </Button>
                  </VStack>

                </>
            }


          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}