import { Box, Heading, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <Box
      minHeight="100vh"
      padding="50px"
      backgroundColor="#F9F9F9"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing={8}
        maxW="800px"
        textAlign="left"
        backgroundColor="white"
        padding={10}
        borderRadius="20px"
        boxShadow="lg"
      >
        <Heading as="h1" size="2xl" color="teal.600" textAlign="center">
          About This Project
        </Heading>

        <Text fontSize="lg" color="gray.700">
          This is a simple e-commerce product showcase website built to demonstrate modern web development features
          and interactive UI elements. The website fetches product data from a public API and allows users to
          interactively browse and filter items.
        </Text>

        <Text fontSize="md" color="gray.700">
          Key features of the website include:
        </Text>

        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="teal.500" />
            <strong>Category Filtering:</strong> Users can filter products by category in real-time.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="teal.500" />
            <strong>Price Slider:</strong> Interactive slider allows selecting a maximum price, showing only products within that range.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="teal.500" />
            <strong>Debounced Search:</strong> Typing in the search box updates product results after a short delay, improving performance and avoiding unnecessary re-renders.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="teal.500" />
            <strong>Responsive Layout:</strong> Grid layout adapts to different screen sizes for a seamless mobile and desktop experience.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="teal.500" />
            <strong>Interactive Product Cards:</strong> Each product card displays image, title, description, and price in a clean, readable format.
          </ListItem>
        </List>

        <Text fontSize="md" color="gray.600">
          This project is a demonstration of using React for interactive UI, Chakra UI for styling, and handling 
          state efficiently for smooth user experience.
        </Text>
      </VStack>
    </Box>
  );
}
