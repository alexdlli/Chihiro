import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Social } from "./Social";

export function Header() {
  return (
    <Flex mt="2.5625rem" px="4" mx="auto" w="1200px" maxW="100%" align="center" justifyContent="space-between" >
      <Logo />
      <Social />
    </Flex>
  )
}
