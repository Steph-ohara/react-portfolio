import React from 'react'
import Runbuddy from "../Portfolio/Runbuddy"
import { HStack, Box, Heading, Spacer } from '@chakra-ui/react'

function index() {
  return (
    <HStack p={3}>
    <Box w="100%" align="center" direction="column" h="400px" bg="white">
      <Heading mb={4} fontSize="4xl">Portfolio</Heading>
      <HStack w="75%" justify="center">
        <Runbuddy />
        <Spacer />
        {/* <Horiseon /> */}
      </HStack>
    </Box>
  </HStack>  )
}

export default index