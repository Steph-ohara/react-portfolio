import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdLinkdIn,
  MdOutlineEmail,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { Button, ButtonGroup } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function contact() {
  return (
    <Flex>
      <VStack w="100%" mr={3} justify="center" p={3}>
        <Heading>Contact</Heading>
        <FormControl isRequired w="75%">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Name" />
        </FormControl>

        <FormControl isRequired w="75%">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" placeholder="Email Address" />
        </FormControl>

        <FormControl isRequired w="75%">
          <FormLabel htmlFor="message">Message</FormLabel>
          <Input id="message" type="text" placeholder="Message" size="lg" />
        </FormControl>

        <Button colorScheme="teal" variant="outline">
          Submit
        </Button>
      </VStack>
    </Flex>
  );
}
