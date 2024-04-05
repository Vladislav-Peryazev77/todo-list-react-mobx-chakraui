import React from "react";
import { Box, Button, Checkbox, ListItem, Text } from "@chakra-ui/react";

import styles from "./TaskItem.module.scss";

interface Task {
  title: string;
  completed: boolean;
  id: number;
}

interface Props {
  task: Task;
  onChange: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskItem = ({ task, onChange, onDeleteTask }: Props) => {
  const taskTextClassName = task.completed ? styles.taskDone : "";

  return (
    <ListItem
      border="1px solid grey"
      padding="5px"
      borderRadius="5px"
      borderColor="#e2e8f0"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Checkbox checked={task.completed} onChange={() => onChange(task.id)} />
        <Text maxWidth="70%" className={taskTextClassName}>
          {task.title}
        </Text>
        <Button onClick={() => onDeleteTask(task.id)}>-</Button>
      </Box>
    </ListItem>
  );
};
