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
    "https://user-images.githubusercontent.com/16748389/85058961-de2a7780-b170-11ea-9607-506f1524d142.jpeg";
  
  export default function ProductSimple() {
    return (
      <Link href="https://steph-ohara.github.io/Horiseon/" >
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
              Horiseon
            </Heading>
            <Link href="https://github.com/Steph-ohara/Horiseon" isExternal>
            <FaGithub mx="2px" />Horiseon
            </Link>
          </Stack>
        </Box>
      </Flex>
      </Link>
    );
  }
  