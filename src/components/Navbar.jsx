import { Box, Flex, Heading } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import { Logo } from "./Footer";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { useState } from "react";

export default function Navbar() {

  
   
    return (

        <Box height={{md:'100px', base:'80px'}}
        boxShadow={'rgba(0, 0, 0, 0.23) 0px 4px 5px -5px'} position={'sticky'} top={0} left={0} right={0} zIndex={2} background={'white'}>
            <Flex justifyContent={'space-between'} h={'full'} alignItems={'center'} maxW={'6xl'} paddingInline={{base:'1rem', md:'5rem'}} m={'auto'} >
                
                <Link to={'/'}>
                <Logo />
                </Link>
                
                <Flex gap={'1rem'} alignItems={'center'} display={{base:'none', md: 'flex'}}>
                    <Link to={'/categories'}>CATEGORIES</Link>
                    <Link to={'/products'}>PRODUCT PAGE</Link>
                    
                    <CartDrawer />
                </Flex>
                <Flex gap={'1rem'} alignItems={'center'} display={{base:'flex', md: 'none'}}>
                    
                    <CartDrawer />
                    <NavDrawer />

                </Flex>
            </Flex>
        </Box>
    )
}