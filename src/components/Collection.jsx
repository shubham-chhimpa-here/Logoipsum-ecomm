import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { items } from "../components/AllData";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Collection() {

    const [state, setState] = useState('all');
    const {cates} = useParams();
    let newArr;

    if(cates == 'all' || !cates) {
        newArr = [...items];
    }
    else {
        newArr =  items.filter(item => item.category == cates);
        
    }
    return (
        <Box maxW={'6xl'} py={4} margin={'auto'} paddingBlock={'5rem'} paddingInline={{base:'1rem', md:'5rem'}} >

        <SimpleGrid columns={{base:'1', sm:'2', md:'3', lg:'4'}} gap={'1rem'}>
            {newArr.map((item, i) => <ProductCard item = {item} key={i} />)}
           
        </SimpleGrid>
        </Box>
    )
}