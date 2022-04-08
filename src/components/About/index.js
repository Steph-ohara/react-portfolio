import React, { useState } from "react";
import {
  Image,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  useColorModeValue,
  VStack,
  Grid,
  GridItem,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";

function Profile() {
  return (
    <Flex id="profile-container" justifyContent={{ base: "flex-end" }}>
      <HStack w="100%" justify="center" p={3} spacing={{ base: "0", md: "6" }}>
        <Box boxSize="200px" alignContent="center">
          <Image
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGxa6DbvZkn_Q/profile-displayphoto-shrink_800_800/0/1516943715866?e=1654732800&v=beta&t=zgz092z3fpbJl1rJGC_AnCmD9HfoKt4gwCd7d62Ocps"
            alt="Dan Abramov"
          />
        </Box>
        <Flex direction="column">
          <Heading>Stephanie O'Hara</Heading>
          <Text>About Me</Text>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default Profile;
