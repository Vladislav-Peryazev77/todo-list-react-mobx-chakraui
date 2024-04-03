import { Box, Button, Checkbox, ListItem } from "@chakra-ui/react";
import React from "react";

export const TaskItem = () => {
  return (
    <ListItem
      border="1px solid grey"
      padding="5px"
      borderRadius="5px"
      borderColor="#e2e8f0"
    >
      <Box display="flex" justifyContent="space-between">
        <Checkbox />
        <span></span>
        <Button>-</Button>
      </Box>
    </ListItem>
  );
};
