import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import {
  Github,
  Home,
  Instagram,
  Linkedin,
  FolderOpenDot,
  Wrench,
  Twitter,
  SquareUser,
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <>
      <HStack
        bgColor={"#14131a"}
        w={["20%","auto"]}
        flexDirection={[ "column"]}
        p={4}
        h={["auto","95vh","full"]}
        overflow={"hidden"}
        
      >
        <Stack bgColor={"#1c1b23"} p={3} spacing={8} h={"full"} w={["auto","auto"]}>
            <Link to={"/"}>
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Home />
                Home
              </div>
          </Button>
            </Link>
            <Link to={"/project"}>
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FolderOpenDot />
                Project
              </div>
          </Button>
            </Link>
            <Link to={"/skills"}>
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Wrench />
                Skills
              </div>
          </Button>
            </Link>
            <Link to={"/about"}>
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <SquareUser />
                About
              </div>
          </Button>
            </Link>
        </Stack>
        <Stack bgColor={"#1c1b23"} h={"full"} spacing="4" w={["auto","auto"]} textAlign={"center"} >
          <Text color={"#86858c"} >Social</Text>

          <a href={"https://www.instagram.com/ammu_negi7781/"}  target="_blank" >
          <Button
            flexDirection={"row"}
            bgColor={"#1c1b23"}
            color={"#86858c"}
            mt={2}
            alignItems={"center"}
            size={["sm","md"]}
          >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  
                }}
              >
                <Instagram color="#b5179e" />
                Instagram
              </div>
          </Button>
            </a>
            <a href={"https://github.com/aman1455/"}  target="_blank">
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}   size={["sm","md"]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Github color="#2a9d8f" />
                GitHub
              </div>
          </Button>
            </a>
            <a href={"https://www.linkedin.com/in/aman-negi-651378250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}  target="_blank">
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}   size={["sm","md"]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Linkedin color="#0277b5" />
                Linkdin
              </div>
          </Button>
            </a>
            <a href={"https://twitter.com/AmanNegi73178"} target="_blank">
          <Button bgColor={"#1c1b23"} color={"#86858c"} mt={2}   size={["sm","md"]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Twitter color="#0277b5" />
                Twitter
              </div>
          </Button>
            </a>
        </Stack>
      </HStack>
    </>
  );
}

export default Sidebar;
