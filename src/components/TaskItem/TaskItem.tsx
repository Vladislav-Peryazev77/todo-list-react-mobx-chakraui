import React from "react";
import { Box, Button, Checkbox, ListItem, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import Task from "../../stores/types/todoListTypes";

interface TaskItemProps {
  task: Task;
  onChange: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdate: () => void;
}

export const TaskItem = observer(
  ({ task, onChange, onDeleteTask, onUpdate }: TaskItemProps) => {
    return (
      <ListItem
        border="1px solid grey"
        padding="5px"
        borderRadius="5px"
        borderColor="#e2e8f0"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Checkbox
            checked={task.completed}
            isChecked={task.completed ? true : false}
            onChange={() => {
              onChange(task.id);
            }}
          />
          <Text
            maxWidth="70%"
            sx={{ textDecoration: task.completed ? "line-through" : "" }}
          >
            {task.title}
          </Text>
          <Button onClick={() => onDeleteTask(task.id)}>-</Button>
        </Box>
      </ListItem>
    );
  }
);
