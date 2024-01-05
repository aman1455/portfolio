import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import Cover from "./Cover";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const text = "Welcome To My Portfolio";
  return (
    <>
      <HStack
        bgColor={"#14131a"}
        p={["-5", "2"]}
        w={["80%", "full"]}
        flexDirection={["column"]}
      >
        <Cover />
        <Text
          fontFamily={"'Roboto', sans-serif"}
          fontSize={{ base: "s", md: "3xl" }}
          color={"white"}
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              loop: Infinity,
            }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </Text>
        <a href="mailto:official.amannegi1140@gmail.com">
          <Button
            Direction={"flex-start"}
            size="sm"
            bgColor={"#1c1b23"}
            color={"#86858c"}
            border="1px"
            borderColor="#c1ad05"
            mt={30}
            flexDirection={"start"}
          >
            Hire Me
          </Button>
        </a>
        <HStack Direction={"flex-start"} w={"full"} pt={40} pl={10}>
          <Text
            color={"white"}
            fontFamily={"raleway ,sans-seri"}
            fontSize={["xl", "4xl"]}
          >
            Hello, I'm{" "}
          </Text>
          <Text
            color={"#e31b6d"}
            fontFamily={"raleway , sans-seri"}
            fontSize={["xl", "4xl"]}
          >
            Aman Negi
          </Text>
        </HStack>
        <HStack Direction={["flex-start"]} w={"full"}pl={10}>
          <Text
            color={"white"}
            fontFamily={"raleway ,sans-seri"}
            fontSize={["m", "xl"]}
            mt={-4}
          >
            I'm Full Stack Web Developer{" "}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export default Home;
