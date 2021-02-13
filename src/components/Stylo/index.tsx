import { Flex } from "@chakra-ui/react";

export const Stylo = ({ color }: { color?: string }) => (
  <Flex
    bg={color || "whiteAlpha.600"}
    width="6px"
    margin="3px 14px 3px 0"
    borderRadius="2px"
  />
);
