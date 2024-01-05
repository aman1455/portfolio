import { Box, HStack, Text, Flex, Container } from "@chakra-ui/react";

function About() {
  return (
    <>
      <HStack
        bgColor={"#14131a"}
        w={["80%", "full"]}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Flex w={["52vh", "full"]} h="50vh" mt={"10"} align="center" justify="center">
          <Box>
            <Text
              color="white"
              fontFamily={"raleway ,sans-seri"}
              fontSize={["2xl", "6xl"]}
            >
              Hello, I'm
            </Text>
          </Box>
          <Box>
            <Text
              color="#e31b6d"
              fontFamily={"raleway ,sans-seri"}
              fontSize={["2xl", "6xl"]}
            >
              Aman Negi
            </Text>
          </Box>
        </Flex>
        <Container flexDirection={"row"} pl={8}>
          <Text mt={"-20"} color={"#86858c"} fontSize={"larger"} p={3}>
            As a web developer, I am passionate about creating innovative and
            efficient solutions. With a strong foundation in front-end and
            back-end technologies, I thrive on turning ideas into functional and
            user-friendly websites. My goal is to contribute to cutting-edge
            projects, continuously learn, and bring value through my coding
            expertise.
          </Text>
        </Container>
      </HStack>
    </>
  );
}

export default About;
