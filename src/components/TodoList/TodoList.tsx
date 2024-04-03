import React from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskItem } from "../TaskItem/TaskItem";
import { Box, List, ListItem } from "@chakra-ui/react";
import TodoListStore from "../../stores/TodoListStore";
import { observer } from "mobx-react-lite";

export const TodoList = observer(() => {
  const { toDoList, setToDoList } = TodoListStore;

  console.log(toDoList);

  return (
    <Box flexGrow="1">
      <TaskInput />
      <List></List>
    </Box>
  );
});
