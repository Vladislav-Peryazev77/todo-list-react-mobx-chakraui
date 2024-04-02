import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { Counter } from "../Counter/Counter";

export const Todo = () => {
  return (
    <Container height="100dvh" display="flex" flexDirection="column">
      <Heading marginY={30} padding={"10px"} textAlign={"center"}>
        Todo lists
      </Heading>
      <Text flexGrow={1}>
        <TaskInput />
        <Counter />
      </Text>
      <Text padding="15px" textAlign="center">
        2024
      </Text>
    </Container>
  );
};
