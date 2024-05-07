import { Box, Container, Flex, IconButton, Image, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [featuredShoes, setFeaturedShoes] = useState([
    { id: 1, name: "Air Jordan 1 Retro High", image: "https://images.unsplash.com/photo-1597843994436-120c8d91cae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBaXIlMjBKb3JkYW4lMjAxJTIwUmV0cm8lMjBIaWdofGVufDB8fHx8MTcxNTA4NjIyMXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Yeezy Boost 350 V2", image: "https://images.unsplash.com/photo-1596520158107-29cf199a6064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxZZWV6eSUyMEJvb3N0JTIwMzUwJTIwVjJ8ZW58MHx8fHwxNzE1MDg2MjIxfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Nike Dunk Low", image: "https://images.unsplash.com/photo-1615290642924-8e6883b28a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOaWtlJTIwRHVuayUyMExvd3xlbnwwfHx8fDE3MTUwODYyMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);

  const [recommendedProducts, setRecommendedProducts] = useState([
    { id: 1, name: "Nike Air Max 97", image: "https://images.unsplash.com/photo-1570051779696-244e9f680cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOaWtlJTIwQWlyJTIwTWF4JTIwOTd8ZW58MHx8fHwxNzE1MDg2MzE1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Adidas Ultraboost 21", image: "https://images.unsplash.com/photo-1604167063158-8a34567cf7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBVbHRyYWJvb3N0JTIwMjF8ZW58MHx8fHwxNzE1MDg2MzE3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Converse Chuck Taylor", image: "https://images.unsplash.com/photo-1704489809293-ab95ce7f4491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDb252ZXJzZSUyMENodWNrJTIwVGF5bG9yfGVufDB8fHx8MTcxNTA4NjMxOHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Puma RS-X", image: "https://images.unsplash.com/photo-1701221029139-73505b5c0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQdW1hJTIwUlMtWHxlbnwwfHx8fDE3MTUwODYzMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 5, name: "New Balance 574", image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOZXclMjBCYWxhbmNlJTIwNTc0fGVufDB8fHx8MTcxNTA4NjMxOXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 6, name: "Reebok Classic Leather", image: "https://images.unsplash.com/photo-1650301312852-7d009eaa5b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSZWVib2slMjBDbGFzc2ljJTIwTGVhdGhlcnxlbnwwfHx8fDE3MTUwODYzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 7, name: "Vans Old Skool", image: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWYW5zJTIwT2xkJTIwU2tvb2x8ZW58MHx8fHwxNzE1MDg2MzIwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 8, name: "Asics Gel-Lyte III", image: "https://images.unsplash.com/photo-1650382353453-1afa68d6ead3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBc2ljcyUyMEdlbC1MeXRlJTIwSUlJfGVufDB8fHx8MTcxNTA4NjMyMHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 9, name: "Under Armour HOVR Phantom", image: "https://images.unsplash.com/photo-1541239370886-851049f91487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxVbmRlciUyMEFybW91ciUyMEhPVlIlMjBQaGFudG9tfGVufDB8fHx8MTcxNTA4NjMyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 10, name: "Brooks Glycerin 19", image: "https://images.unsplash.com/photo-1558958081-97212b97e30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCcm9va3MlMjBHbHljZXJpbiUyMDE5fGVufDB8fHx8MTcxNTA4NjMyM3ww&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          naha
        </Text>
        <InputGroup w="30%">
          <Input placeholder="Search for shoes..." />
          <InputRightElement children={<IconButton aria-label="Search" icon={<FaSearch />} />} />
        </InputGroup>
        <Flex>
          <IconButton aria-label="Account" icon={<FaUserCircle />} m={2} />
          <IconButton aria-label="Wishlist" icon={<FaHeart />} m={2} />
          <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} m={2} />
        </Flex>
      </Flex>

      <VStack spacing={8} my={0}>
        <Flex overflow="hidden" w="full" pos="relative">
          {featuredShoes.map((shoe) => (
            <Box key={shoe.id} flex="none" boxSize="full" p={5}>
              <Image src={shoe.image} alt={shoe.name} boxSize="full" objectFit="cover" />
              <Text pos="absolute" bottom="5" left="5" color="white" fontSize="xl" fontWeight="bold">
                {shoe.name}
              </Text>
            </Box>
          ))}
        </Flex>

        <SimpleGrid columns={5} spacing={4}>
          {recommendedProducts.map((product) => (
            <Box key={product.id} boxShadow="md" p="5" rounded="md" bg="white">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" m="auto" />
              <Text mt="2" fontSize="md" fontWeight="semibold" textAlign="center">
                {product.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
