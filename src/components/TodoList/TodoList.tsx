import React from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskItem } from "../TaskItem/TaskItem";
import { Box, List } from "@chakra-ui/react";
import TodoListStore from "../../stores/TodoListStore";
import { observer } from "mobx-react-lite";

export const TodoList = observer(() => {
  const {
    toDoList,
    setToDoList,
    setTaskStatus,
    handleAddTask,
    handleUpdateLocalStorage,
  } = TodoListStore;

  const handleTaskStatusChange = (checkedTaskId: number) => {
    const foundIndex = toDoList.findIndex((task) => task.id === checkedTaskId);

    if (foundIndex === -1) {
      return;
    }
    setTaskStatus(foundIndex);
  };

  const handleDeleteTask = (deleteTaskId: number) => {
    setToDoList(toDoList.filter((task) => task.id !== deleteTaskId));
  };

  return (
    <Box flexGrow="1">
      <TaskInput onAddTask={handleAddTask} />
      <List display="flex" gap="5px" flexDirection="column">
        {toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            onChange={handleTaskStatusChange}
            onDeleteTask={handleDeleteTask}
            onUpdate={handleUpdateLocalStorage}
          />
        ))}
      </List>
    </Box>
  );
});
