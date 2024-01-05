import { Avatar, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import img from "../assets/cover.jpeg";
import profile from "../assets/profile.png";
import { Instagram } from "lucide-react";
function Cover() {
  return (
    <>
      <HStack
        p={8}
        h={{ base: "10vh", md: 170 }}
        w={["70%", "full"]}
        mr={25}
        m={"5vh"}
        overflow="hidden"
        position="relative"
      >
        <Image
          src={img}
          alt="Cover Picture"
          objectFit="cover"
          position="absolute"
          w={["auto", "full"]}
          filter="blur(10px)"
        />
        <HStack  w={["70%", "full"]}>
          <HStack w={["52vh", "full", "full"]}>
            <Avatar size={{ base: "md", md: "xl" }} src={profile} />
            <Stack p={{ base: 3, md: 5 }}>
              <Text
                fontFamily={"'Roboto', sans-serif"}
                fontSize={{ base: "sm", md: "3xl" }}
                color={"whitesmoke"}
                zIndex="2"
                fontWeight={"bold"}
              >
                Aman Negi
              </Text>
              <Text
                mt={{ base: -1, md: -4 }}
                fontSize={"3xs"}
                color={"whitesmoke"}
                zIndex="2"
              >
                @AmnaNegi73178
              </Text>
            </Stack>
          </HStack>
          <Button
            size={{ base: "sm", md: "md", lg: "md" }}
            colorScheme="messenger"
          >
             <a href={"https://www.instagram.com/ammu_negi7781/"}  target="_blank" >

            <HStack spacing={2} overflow={"hidden"}>
            <Instagram color="#fff"/> <Text fontSize={["2xs","large"]}>Follow Me</Text>
           </HStack>
             </a>
          

            
          </Button>
        </HStack>
      </HStack>
    </>
  );
}

export default Cover;
