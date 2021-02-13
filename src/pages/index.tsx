import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import Container from "../components/Container";
import { SpaceBar } from "../components/Space";
import { Stylo } from "../components/Stylo";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const projects = [
  {
    id: 1,
    name: "Employee Buddy",
    url: "https://app.employeebuddy.xyz",
    thumb:
      "https://res.cloudinary.com/daobm9duu/image/upload/v1613226891/rect38_r1l0dw.png",
  },
  {
    id: 2,
    name: "Zedar Services",
    url: "https://zedarservice.com/",
    thumb:
      "https://res.cloudinary.com/daobm9duu/image/upload/v1613226891/rect38_r1l0dw.png",
  },
  {
    id: 3,
    name: "Staking Ether",
    url: "https://stakingether.com/",
    thumb:
      "https://res.cloudinary.com/daobm9duu/image/upload/v1613226891/rect38_r1l0dw.png",
  },
  {
    id: 4,
    name: "Employee Buddy",
    url: "https://app.employeebuddy.xyz",
    thumb:
      "https://res.cloudinary.com/daobm9duu/image/upload/v1613226891/rect38_r1l0dw.png",
  },
];

const Index = () => (
  <Container>
    <Flex direction="column" padding={{ sm: "1rem", md: "1rem 1rem 1rem 0" }}>
      <Flex paddingTop={{ sm: "0.5rem", md: "3rem" }}>
        <Stylo color="accent" />
        <Text color="blackAlpha.700" fontSize="1.4rem" fontWeight="bold">
          At a glance!
        </Text>
      </Flex>
      <SpaceBar half />
      <Card>
        <Flex
          direction={{ sm: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text fontWeight="400" paddingRight={{ sm: 0, md: "8rem" }}>
            Working with React, Redux, NextJS and TypeScript. Consuming data
            from REST API or GraphQL and arrange them in a performant way.
            Completed my BSc in Computer Science and additionally a Javascript
            algorithm and data structure course on Free Code Camp contains 300
            hours of course materials. Looking forward to bring a better user
            user experience in the ever changing web ecosystem.
          </Text>
          <Image
            width="12rem"
            objectFit="cover"
            marginTop={{ sm: "1rem", md: "-7rem" }}
            alt="structure image"
            src="https://res.cloudinary.com/daobm9duu/image/upload/v1613223853/drawing_dawqtj.svg"
          />
        </Flex>
      </Card>
      <SpaceBar />
      <Flex>
        <Stylo color="accent2" />
        <Text color="blackAlpha.700" fontSize="1.4rem" fontWeight="bold">
          Few projects that demonstrate skills!
        </Text>
      </Flex>
      <SpaceBar half />
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        {projects.map((item) => (
          <GridItem key={item.id} colSpan={{ sm: 12, md: 4 }}>
            <Card>
              <Text color="blackAlpha.800" fontSize="1.2rem" fontWeight="bold">
                {item.name}
              </Text>
              <SpaceBar half />
              <Text fontSize="1rem">
                Ethereum is open access to digital money and data-friendly
                services for everyone – no matter your background or location.
                It's a community-built technology behind the cryptocurrency.
              </Text>
              <SpaceBar half />
              <Flex
                onClick={() => window.open(item.url, "_blank")}
                userSelect="none"
                cursor="pointer"
                align="center"
              >
                <Text
                  _hover={{ color: "accent2", transition: "all linear 0.2s" }}
                  color="dark"
                  fontWeight="bold"
                >
                  Visit
                </Text>
                <SpaceBar />
                <ArrowForwardIcon color="darkgray" />
              </Flex>
              <SpaceBar half />
              <Image borderRadius="0.5rem" src={item.thumb} alt="thumbnail" />
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  </Container>
);

export default Index;
