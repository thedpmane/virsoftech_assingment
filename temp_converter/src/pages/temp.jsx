import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("celsius");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    const temperatureValue = parseFloat(temperature);

    if (isNaN(temperatureValue)) {
      setResult("Please enter a valid number");
      return;
    }

    if (scale === "celsius") {
      const convertedTemperature = ((temperatureValue - 32) * 5) / 9;
      setResult(
        `${temperatureValue}°F is equal to ${convertedTemperature.toFixed(2)}°C`
      );
    } else {
      const convertedTemperature = (temperatureValue * 9) / 5 + 32;
      setResult(
        `${temperatureValue}°C is equal to ${convertedTemperature.toFixed(2)}°F`
      );
    }
  };

  return (
    <Container centerContent>
      <Box
        p="6"
        maxW="400px"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        mt="4"
        textAlign="center"
      >
        <Heading as="h2" size="lg" mb="4">
          Temperature Converter
        </Heading>
        <FormControl>
          <FormLabel htmlFor="temperature">
            Enter Temperature in {scale === "celsius" ? "F" : "°C"}
          </FormLabel>
          <Input
            type="number"
            id="temperature"
            placeholder="Enter temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </FormControl>
        <FormControl mt="2">
          <FormLabel htmlFor="scale">Select Scale:</FormLabel>
          <Select
            id="scale"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </Select>
        </FormControl>
        <Button mt="4" colorScheme="teal" onClick={convertTemperature}>
          Convert
        </Button>
        <Text mt="4" fontSize="lg">
          {result}
        </Text>
      </Box>
    </Container>
  );
};

export default TemperatureConverter;
