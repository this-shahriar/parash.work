import {
  Flex,
  useColorMode,
  FlexProps,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ProfileMenu = dynamic(() => import("../ProfileMenu"), {
  loading: () => <p>Loading</p>,
});

const Container = ({ children }: any) => (
  <Wrapper minHeight="100vh">
    <Grid
      templateColumns="repeat(12, 1fr)"
      maxWidth="1440px"
      width="100%"
      height={{ sm: "auto", md: "100%" }}
    >
      <GridItem colSpan={{ sm: 12, md: 3, lg: 3 }}>
        <ProfileMenu />
      </GridItem>
      <GridItem colSpan={{ sm: 12, md: 9, lg: 9 }}>{children}</GridItem>
    </Grid>
  </Wrapper>
);

const Wrapper = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.300", dark: "gray.900" };
  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

export default Container;
