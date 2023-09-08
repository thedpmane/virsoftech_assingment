import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CryptoCard } from "./CryptoCard";
import { Navbar } from "./Navbar"; // Import the Navbar component

export const CryptoStore = () => {
  const cryptocurrencies = [
    {
      id: 1,
      name: "Bitcoin",
      price: 40000,
      image: "https://media2.giphy.com/media/dt1GOk4LEoZRfE4AqW/giphy.gif",
    },
    {
      id: 2,
      name: "Ethereum",
      price: 2800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NiKSaAa_cvgm1_oOVw6LcZrqs_H7Z0euug&usqp=CAU",
    },
    {
      id: 3,
      name: "Litecoin",
      price: 150,
      image: "https://media1.giphy.com/media/xULW8imgOopU62dFkc/giphy.gif",
    },
  ];

  const cart = useSelector((state) => state.cart);

  return (
    <Box>
      <Box p={4}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {cryptocurrencies?.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
