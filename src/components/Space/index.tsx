import { Flex } from "@chakra-ui/react";

export const SpaceBar = ({
  double,
  half,
}: {
  double?: boolean;
  half?: boolean;
}) => <Flex padding={double ? "2rem" : half ? "0.5rem" : "1rem"} />;
