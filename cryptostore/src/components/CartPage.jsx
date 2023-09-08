import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  // Calculate the total cost of all items in the cart
  const totalCost = cart.reduce(
    (acc, item) => acc + item.quantity * item.crypto.price,
    0
  );

  return (
    <Box>
      <Text fontSize="2xl" mb="4">
        Your Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty!</Text>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.crypto.id} item={item} />
          ))}
          <Text fontWeight="bold" fontSize="lg" mt="4">
            Total Cost: ${totalCost}
          </Text>
        </>
      )}
    </Box>
  );
};

export { CartPage };
