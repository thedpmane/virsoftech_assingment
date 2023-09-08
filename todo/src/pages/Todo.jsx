import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  ChakraProvider,
  Spacer,
  Heading,
  Center,
  useToast,
} from "@chakra-ui/react";

export default function TodoList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [taskInput, setTaskInput] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
      toast({
        title: "Task Added",
        description: "Task has been added to the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast({
      title: "Task Removed",
      description: "Task has been removed from the list.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };
  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <Center minH="100vh">
      <VStack
        spacing={4}
        align="start"
        w="400px"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Heading size="lg">Todo List</Heading>
        <Input
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          size="md"
        />
        <Button onClick={handleAddTask} colorScheme="teal" size="md">
          Add
        </Button>
        <VStack
          divider={<Box borderBottomWidth="1px" borderColor="gray.200" />}
          spacing={2}
          align="stretch"
          w="100%"
        >
          {tasks.length === 0 ? (
            <Text fontSize="md" color="gray.500">
              No tasks added yet!
            </Text>
          ) : (
            tasks.map((task, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="md"
                p={2}
                w="100%"
                display="flex"
                alignItems="center"
              >
                <Text flex="1" fontSize="md">
                  {task}
                </Text>
                <Spacer />
                <Button
                  colorScheme="red"
                  onClick={() => handleRemoveTask(index)}
                  size="sm"
                >
                  X
                </Button>
              </Box>
            ))
          )}
        </VStack>
      </VStack>
    </Center>
  );
}
