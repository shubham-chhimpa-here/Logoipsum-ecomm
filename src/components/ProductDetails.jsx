import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { items } from './AllData';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const {setCart} = useContext(CartContext);
  const {id} = useParams();
  const item = items.find(i => i.id == id)
  const {img, description, price, specs, texture, weight, size} = item;

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  const handleClick  = (item) => {
    setCart(cart => {
      return [...cart , item]
    })
  }
  return (
    <Container maxW={'6xl'} py={4}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex padding={'1rem'} >
          <Image
            rounded={'md'}
            alt={'product image'}
            src={img}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} >
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {description}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
             
              <Text fontSize={'lg'}>
                {specs}
              </Text>
            </VStack>
            
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Texture:
                  </Text>{' '}
                  {texture}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    WEIGHT:
                  </Text>{' '}
                  {weight}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    SIZE:
                  </Text>{' '}
                  {size}
                </ListItem>
                
              </List>
            </Box>
          </Stack>

          <Button
          onClick={() => {
            handleClick(item)
          }}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}