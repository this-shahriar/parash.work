import { Flex, Avatar, Text, Button, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { Card } from "../Card";
import { SpaceBar } from "../Space";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaBehance,
} from "react-icons/fa";

const MenuBtn = (props: ButtonProps & { selected?: boolean }) => (
  <Button
    _active={{ outline: "none" }}
    _focus={{ outline: "none" }}
    _hover={{ backgroundColor: "gray.100" }}
    width="100%"
    color={props.selected ? "blackAlpha.900" : "blackAlpha.700"}
    bg={props.selected ? "whiteAlpha.500" : {}}
    variant="ghost"
    margin={{ sm: "0", md: "0.2rem" }}
    {...props}
  />
);

const ProfileMenu = () => {
  const router = useRouter();
  const { pathname, push } = router;
  console.log("router", router);
  const menu = [
    { key: 1, path: "/", name: "Home" },
    { key: 2, path: "/blog", name: "Blog" },
    { key: 3, path: "/contact", name: "Contact" },
  ];

  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      direction="column"
      padding="1rem"
    >
      <Avatar
        src="https://res.cloudinary.com/daobm9duu/image/upload/v1613207506/2e293456812193.5a646ff949b1e_yaqdto.jpg"
        size="xl"
        bg="teal.500"
      />
      <Card align="center" marginTop="-3rem" paddingTop="4rem">
        <Text align="center" fontWeight="700" fontSize="1.2rem">
          Shahriar Hasan Parash
        </Text>
        <Text>Frontend Engineer</Text>
        <SpaceBar />
        <Text align="center">
          Focusing on bringing a better web experience to everyone.
        </Text>
        <SpaceBar />
        <Flex width="100%" direction={{ sm: "row", md: "column" }}>
          {menu?.map((item) => (
            <MenuBtn
              onClick={() => push(item.path)}
              selected={pathname === item.path}
              key={item.key}
            >
              {item.name}
            </MenuBtn>
          ))}
        </Flex>
        <SpaceBar />
        <Flex>
          <FaGithub color="blackAlpha.600" size="1.8rem" />
          <SpaceBar half />
          <FaLinkedin color="blackAlpha.600" size="1.8rem" />
          <SpaceBar half />
          <FaStackOverflow color="blackAlpha.600" size="1.8rem" />
          <SpaceBar half />
          <FaBehance color="blackAlpha.600" size="1.8rem" />
          <SpaceBar half />
        </Flex>
        <SpaceBar half />
      </Card>
    </Flex>
  );
};

export default ProfileMenu;
