import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

function Skill() {
  return (
    <>
      <HStack
        flexDirection={"column"}
        color={"whitesmoke"}
        spacing={4}
        bgColor={"#14131a"}
        w={["80%", "full"]}
      >
        <Stack w={"full"} h={10} p={10}>
          <Text>What I Know</Text>
        </Stack>

        <HStack
          flexDirection={["column", "row"]}
          color={"whitesmoke"}
          spacing={4}
          bgColor={"#14131a"}
          w={["auto", "full"]}
        >
          <Box
            w={52}
            h={52}
            alignItems={"center"}
            spacing={2}
            bgColor={"#1c1b23"}
            color={"#86858c"}
            objectFit={"cover"}
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
            <Box>
              <Text fontWeight={"bold"}>Fontend</Text>
            </Box>
            <Box flexDirection={"row"}>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="rgba(0, 0, 255, 0.6)"
                mt={4}
                ml={2}
              >
                Html
              </Button>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#45ccae"
                mt={4}
                ml={2}
              >
                css
              </Button>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#e17f13"
                mt={4}
                ml={2}
              >
                Tailwind
              </Button>
              
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#c1ad05"
                mt={4}
                ml={2}
              >
                js
              </Button>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#0ea0e8"
                mt={4}
                ml={2}
              >
                React
              </Button>
              
            </Box>
          </Box>
          <Box
            w={52}
            h={52}
            alignItems={"center"}
            color={"#86858c"}
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
            <Box>
              <Text color={"#86858c"} fontWeight={"bold"}>
                Backend
              </Text>
            </Box>
            <Box>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#07a101"
                mt={4}
                ml={2}
              >
                Node js
              </Button>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#c1ad05"
                mt={4}
                ml={2}
              >
                Express Js
              </Button>
            </Box>
          </Box>
          <Box
            w={52}
            h={52}
            alignItems={"center"}
            color={"#86858c"}
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
            <Box>
              <Text color={"#86858c"} fontWeight={"bold"}>
                Database
              </Text>
            </Box>
            <Box>
              <Button
                size="sm"
                bgColor={"#1c1b23"}
                color={"#86858c"}
                border="1px"
                borderColor="#07a101"
                mt={4}
                ml={2}
              >
                MongoDB
              </Button>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
}

export default Skill;
