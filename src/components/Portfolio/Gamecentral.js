import {
  Box,
  Center,
  Flex,
  useColorModeValue,
  Heading,
  Link,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

import { FaGithub } from 'react-icons/fa';

const IMAGE =
  "https://imageio.forbes.com/specials-images/imageserve/61d6376afb41b047d0299df8/Video-Gamer-Mouse--Keyboard--Headphones-and-Controller/1960x0.jpg?fit=bounds&format=jpg&width=960";

export default function ProductSimple() {
  return (
    <Link href="http://game-central3.herokuapp.com/">
      <Flex py={12}>
        <Box
          position={"relative"}
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Game Central
            </Heading>
            <Link href="https://github.com/Alopez844/vg-search-engine-" isExternal>
            <FaGithub mx="2px" />Game Central 
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Link>
  );
}
