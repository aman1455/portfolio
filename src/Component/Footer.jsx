import { Stack, Text } from "@chakra-ui/react";
import {
    Github,
    Linkedin,
    Twitter
  } from 'lucide-react';

function Footer() {
    return ( <>
    <Stack bgColor={"#14131a"}w={[ "100%", "full"]} p={4} alignItems={"center"}>
        <Stack flexDirection={"row"}><Text color={"#86858c"} >@copyright 2023</Text>
        <Github  color={"#86858c"}/><Twitter color={"#86858c"}/><Linkedin color={"#86858c"}/>
        </Stack>
    </Stack>
    </> );
}

export default Footer;