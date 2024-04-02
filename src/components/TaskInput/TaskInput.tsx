import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import React from "react";

export const TaskInput = () => {
  return (
    <FormControl>
      <Box display="flex" gap={15}>
        <Input placeholder="Your todo" />
        <Button colorScheme="purple">+</Button>
      </Box>
    </FormControl>
  );
};
