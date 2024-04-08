import { Button, FormControl, Input } from "@chakra-ui/react";
import React from "react";
import TaskInputStore from "../../stores/TaskInputStore";
import { observer } from "mobx-react-lite";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export const TaskInput = observer(({ onAddTask }: TaskInputProps) => {
  const { taskInputValue, handleInputValueChange } = TaskInputStore;

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskInputValue.trim() === "") {
      return;
    }
    onAddTask(taskInputValue);

    handleInputValueChange("");
  };

  return (
    <form action="" onSubmit={handleSubmitForm}>
      <FormControl display="flex" gap={15} marginBottom="20px">
        <Input
          value={taskInputValue}
          placeholder="Your todo"
          name="task"
          onChange={(event) => handleInputValueChange(event.target.value)}
        />
        <Button colorScheme="purple">+</Button>
      </FormControl>
    </form>
  );
});
