import React from 'react'
import { HStack, Box, Heading, Spacer, VStack, Flex, StackDivider } from '@chakra-ui/react'

import Runbuddy from "../Portfolio/Runbuddy"
import Horiseon from "../Portfolio/Horiseon"
import Ritebites from "../Portfolio/Ritebites"
import Scheduler from "../Portfolio/Scheduler"
import Gamecentral from "../Portfolio/Gamecentral"



function index() {
  return (
    <Flex id="profile-container" justifyContent={{ base: "flex-end" }}>
      <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={20}
        align="stretch"
      >

    <HStack p={3}>
    <Box w="100%" align="center" direction="column" h="400px" bg="white">
      <Heading mb={4} fontSize="4xl">Portfolio</Heading>
      <HStack w="75%" justify="center">
        <Runbuddy />
        <Spacer />
        <Horiseon />
        <Spacer />
        <Ritebites />
        </HStack>
    </Box>
      </HStack>

      <HStack p={3}>
        <Box w="100%" align="center" direction="column" h="400px" bg="white">
          <HStack w="75%" justify="center">
            <Scheduler />
            <Spacer />
            <Horiseon />
            <Spacer />
            <Gamecentral />
          </HStack>
        </Box>
      </HStack> 
  </VStack>
  </Flex>
 )
}

export default index