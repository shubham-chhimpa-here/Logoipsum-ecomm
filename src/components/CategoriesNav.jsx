import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

export default function CategoriesNav() {
    const arr = ["all","furniture","chair","kitchen","lamp","skin-care","electronic"];
    const {cates} = useParams();
    return <Box  paddingTop={'3rem'} >
        <VStack maxW={'6xl'} m={'auto'} paddingInline={{base:'1rem', md:'5rem'}}  gap={'2rem'} > 
            <HStack justifyContent={'space-between'} w={'full'} alignItems={'center'} >
                <Link to={'/'}>
                <Button leftIcon={<FaChevronLeft />} background={'transparent'}
                
                boxShadow={'none'}
                _hover={{
                    boxShadow:'none',
                }}
                _active={{
                    bg:'none'
                }}
                >
                    Home
                </Button>
                </Link>
                <Heading fontSize={'1.5rem'} margin={'auto'} textTransform={'uppercase'}>
                    {cates || 'all'}
                </Heading>
            </HStack>
            <Flex flexWrap={'wrap'} justifyContent={'center'}>
                {
                    arr.map((item,i) => <Link to={`/categories/${item}`} key={i}> 
                     <Button 
                    marginBlock={'.5rem'}
                    
                    borderRadius={'none'}
                    textTransform={'capitalize'}
                    marginInline={'4px'}>
{item}
                    </Button>
                        </Link>
                    
                    )
                }
            </Flex>
        </VStack>
    </Box>
}