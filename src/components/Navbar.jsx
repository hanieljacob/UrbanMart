import {Flex, List, ListItem, Link, Image } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="10px"
      backgroundColor="#4A4A4A"
      position="sticky"
      top="0"
      width="100%"
      z-index="10"
    >
      <Image
          // src="path/to/your/logo.png"
          // alt="Logo"
          // height="50px"
          // width="80px"
          // paddingLeft="20px"
      />
      <Flex
        id="nav-items"
        align="center"
      >
        <List display="flex" gap="30px" paddingRight="50px">
          <ListItem>
            <Link color="white" href="#">Home</Link>
          </ListItem>
          <ListItem>
            <Link color="white" href="#">About</Link>
          </ListItem>
          <ListItem>
            <Link color="white" href="#">Cart</Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
