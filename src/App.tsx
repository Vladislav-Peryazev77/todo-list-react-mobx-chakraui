import React from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { Container, Text } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Container display="flex" flexDirection="column" height="100dvh">
      <Header />
      <TodoList />
      <Footer />
    </Container>
  );
};
