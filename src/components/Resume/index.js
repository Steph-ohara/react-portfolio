import {
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
  HStack,
  Box,
  Container,
} from "@chakra-ui/react";
import React from "react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function index() {
  return (
    <Container p={3}>
      <Box w="100%" align="center" direction="column">
        <Heading mb={4} fontSize="4xl">
          Resume
        </Heading>
    </Box>
    <Box>
          <Text fontSize="2xl">Front-End Proficiency</Text>
          <UnorderedList>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>jQuery</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Chakra UI</ListItem>
          </UnorderedList>

          <Text fontSize="2xl">Front-End Proficiency</Text>
          <UnorderedList>
            <ListItem>APIs</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>MySQL, Squelize</ListItem>
            <ListItem>MongoDB, Mongoose</ListItem>
            <ListItem>REST</ListItem>
            <ListItem>GraphQL</ListItem>
          </UnorderedList>
      </Box>
    </Container>
  );
}

export default index;
