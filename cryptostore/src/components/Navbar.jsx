import React from "react";
import { Flex, Box, Text, IconButton, Badge, Spacer } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Box bg="blue.500" color="white" p={4}>
      <Flex align="center">
        <Link to={"/"}>
          <Text fontSize="xl">Crypto Store</Text>
        </Link>
        <Spacer />
        <Link to={"/cart"}>
          <IconButton
            icon={<FiShoppingCart />}
            aria-label="Cart"
            variant="ghost"
            fontSize="xl"
          />
          <Badge colorScheme="red">{cart.length}</Badge>
        </Link>
      </Flex>
    </Box>
  );
};

export { Navbar };
