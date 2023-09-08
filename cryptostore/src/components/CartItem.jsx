import React from "react";
import { Box, Text, Button, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <Box borderWidth="1px" p="4" borderRadius="md" mb="4">
      <Stack direction="row" justify="space-between" align="center">
        <Text>{item.crypto.name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Total: ${item.quantity * item.crypto.price}</Text>
        <Button onClick={handleRemove} colorScheme="red">
          Remove
        </Button>
      </Stack>
    </Box>
  );
};
