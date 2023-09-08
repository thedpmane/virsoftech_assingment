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

const MyTemp = () => {
  const [param, setParam] = useState("cel");
  const [tempValue, setTempValue] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (param === "cel" && tempValue) {
      const convertedTemp = (tempValue * 9) / 5 + 32;
      setResult(`${tempValue}°C  to ${convertedTemp} F`);
    } else if (param === "far" && tempValue) {
      const convertedTemp = ((tempValue - 32) * 5) / 9;
      setResult(`${tempValue} F to ${convertedTemp} °C `);
    } else {
      setResult("Please enter a valid number");
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input name="num" onChange={(e) => setTempValue(e.target.value)} />
        <Select defaultValue={"cel"} onChange={(e) => setParam(e.target.value)}>
          <option value="cel">celsius</option>
          <option value="far">fahrenheit</option>
        </Select>
        <Button type="submit">convert</Button>
      </form>
      <Box>{result}</Box>
    </Box>
  );
};

export default MyTemp;
