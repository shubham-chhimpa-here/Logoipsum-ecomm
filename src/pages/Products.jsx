import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { items } from "../components/AllData";

export default function Products() {
    return (
        <Box maxW={'6xl'} py={4} margin={'auto'} paddingBlock={'5rem'} paddingInline={{base:'1rem', md:'5rem'}} mt={'100px'}>

        <SimpleGrid columns={{base:'1', sm:'2', md:'3', lg:'4'}} gap={'1rem'}>
            {items.map((item, i) => <ProductCard item = {item} key={i} />)}
            {/* <ProductCard /> */}
        </SimpleGrid>
        </Box>
    )
}