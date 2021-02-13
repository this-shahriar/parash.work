import { Flex, FlexProps } from "@chakra-ui/react";

export const Card = (props: FlexProps) => (
  <Flex
    width="100%"
    direction="column"
    borderRadius="0.5rem"
    padding="1rem"
    bg="whiteAlpha.500"
    {...props}
  />
);
