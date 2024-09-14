import {Flex, List, ListItem, Link, Image } from '@chakra-ui/react';
import urbanmart from '../images/urbanmart.png';

export default function Navbar() {
  return (
    <Flex
      overflow='hidden'
      as="nav"
      align="center"
      justify="space-between"
      padding="10px"
      backgroundColor="#4A4A4A"
      position="sticky"
      top="0"
      width="100%"
      zIndex={100}
    >
      <Image
          src={urbanmart}
          alt="Logo"
          height="50px"
          width="90px"
          paddingLeft="20px"
          paddingBottom="10px"
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
