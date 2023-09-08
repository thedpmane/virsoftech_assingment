import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi"; // Import plus and minus icons
import { addToCart } from "../redux/actions";

const CryptoCard = ({ crypto }) => {
  const [quantity, setQuantity] = useState(1); // Set default value to 1
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    if (quantity > 0) {
      dispatch(addToCart(crypto, quantity));
      setQuantity(1); // Reset to default value after buying
    } else {
      alert("Please enter a quantity.");
    }
  };

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${crypto.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={crypto.image}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {crypto.name}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            ${crypto.price}
          </Heading>
          {/* <Flex align="center" mt={2}>
            <Button
              size="sm"
              onClick={handleDecrease}
              leftIcon={<FiMinus />}
              mr={2}
            ></Button>
            <InputGroup size="sm">
              <Input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <InputRightAddon>
                <Button
                  size="sm"
                  onClick={handleIncrease}
                  leftIcon={<FiPlus />}
                ></Button>
              </InputRightAddon>
            </InputGroup>
          </Flex> */}
          <Flex alignItems="center" mt={4}>
            <Button
              size="sm"
              pr={1}
              onClick={handleDecrease}
              leftIcon={<FiMinus />}
              backgroundColor="blue.500"
              color="white"
              _hover={{ backgroundColor: "blue.500" }}
              borderRadius="0"
            ></Button>
            <Input
              type="number"
              min="1"
              max="100"
              textAlign="center"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              fontSize="lg"
              mx={2}
              width="50px"
              borderColor="blue.300"
              borderRadius="0"
            />
            <Button
              size="sm"
              pr={1}
              onClick={handleIncrease}
              leftIcon={<FiPlus />}
              backgroundColor="blue.500"
              color="white"
              _hover={{ backgroundColor: "blue.500" }}
              borderRadius="0"
            ></Button>
          </Flex>
          <Button
            mt={2}
            size="md"
            w="100px"
            _hover={{ color: "black", bg: "blue.300" }}
            onClick={handleBuy}
            bg="blue.500"
            color={"white"}
          >
            Buy
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export { CryptoCard };
