import { Box, Button, HStack, Stack, Text,  } from "@chakra-ui/react";
import { Download } from "lucide-react";


function Header() {
    
  const handleDownload = () => {
    // Replace "your-file-url" with the actual URL or path of the file you want to download
    const fileUrl = "https://amanportfolio74.netlify.app/cv.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "downloaded-file"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <HStack bgColor={"#14131a"} color={"white"} p={4} w={["100","full"]}>
        <Stack w={ "full" } flexDirection={"row"} spacing={4} pl={17}>
          <Box h={4} w={4} mt={ 3} rounded="lg" bgColor={"#2bd576"}></Box>
          <Box h={4} w={4} mt={3} rounded="lg" bgColor={"#2bd576"}></Box>
        </Stack>
        <Button
          bgColor={"#2bd576"}
          color={"white"}
          iconSpacing={2}
          onClick={handleDownload}
        >
          <Download />
          <Text pl={2}>Dowload CV</Text>{" "}
        </Button>
      </HStack>
    </>
  );
}

export default Header;
