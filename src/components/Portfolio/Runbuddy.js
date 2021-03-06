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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfWfFeIP8dEHdG_o-nfQNaN8i76zMRw-q0g&usqp=CAU";
  
  export default function ProductSimple() {
    return (
      <Link href="https://steph-ohara.github.io/run-buddy/" >
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
              Runbuddy
            </Heading>
            <Link href="https://github.com/Steph-ohara/run-buddy" isExternal>
            <FaGithub mx="2px" />Run Buddy
            </Link>
          </Stack>
        </Box>
      </Flex>
      </Link>
    );
  }
  