import { Box, Button, Container, HStack, Image, Text } from "@chakra-ui/react";
import crypto from "../assets/crypto.jpeg";
import idbm from "../assets/imdb_logo.png";
import weather from "../assets/weather.png";

import { Github, Radio } from "lucide-react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <HStack
        flexDirection={["column", "row"]}
        color={"whitesmoke"}
        spacing={4}
        bgColor={"#14131a"}
        w={["80%", "full"]}
      >
        <Box
          flexDirection={"row"}
          w={60}
          h={60}
          alignItems={"center"}
          spacing={2}
          bgColor={"#1c1b23"}
          shadow={"lg"}
          p={"8"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={crypto} h={58} w={"full"} objectFit="cover" />

          <Text fontWeight={"bold"}>{"1"}</Text>
          <Text fontSize={"large"}>{"Crypto App"}</Text>
          <Text fontSize={"small"}>
            {"React, chakra-ui, react-hook, jsx, css"}
          </Text>
          <a href={"https://crypto-app-aman.netlify.app"} target="_blank">
            <Button>
              <Radio />
            </Button>
          </a>
          <a href={"https://github.com/aman1455/Crypto-app"}>
            <Button ml={4}>
              <Github />
            </Button>
          </a>
        </Box>
        <Box
          flexDirection={"row"}
          bgColor={"#1c1b23"}
          w={60}
          h={60}
          alignItems={"center"}
          shadow={"lg"}
          p={"8"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={idbm} h={58} w={"full"} objectFit="cover" />

          <Text fontWeight={"bold"}>{"2"}</Text>
          <Text fontSize={"large"}>{"IDBM Clone"}</Text>
          <Text fontSize={"small"}>
            {"React, chakra-ui, react-hook, jsx, css"}
          </Text>

          <a href={"https://amanimbd-clone.netlify.app/"} target="_blank">
            <Button>
              <Radio />
            </Button>
          </a>
          <a href={"https://github.com/aman1455/IDBM-CLONE"} target="_blank">
            <Button ml={4}>
              <Github />
            </Button>
          </a>
        </Box>
        <Box
          flexDirection={"row"}
          bgColor={"#1c1b23"}
          w={60}
          h={60}
          alignItems={"center"}
          shadow={"lg"}
          p={"8"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={weather} h={59} w={"full"} objectFit="cover" />

          <Text fontWeight={"bold"}>{"3"}</Text>
          <Text fontSize={"large"}>{"Weather App"}</Text>
          <Text fontSize={"small"}>
            {"React, chakra-ui, react-hook, jsx, css"}
          </Text>
          <a href="https://kshitizrohilla.github.io/weather-app-using-openweathermap-api/" target="_blank">
            <Button>
              <Radio />
            </Button>
          </a>
          <a href={"https://github.com/aman1455/Crypto-app"} target="_blank">
            <Button ml={4}>
              <Github />
            </Button>
          </a>
        </Box>
      </HStack>
    </>
  );
}

export default Project;
