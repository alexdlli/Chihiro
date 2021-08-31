import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Social } from "./Social";

export function Header() {
  return (
    <Flex mt="2.5625rem" px="4" mx="auto" w="100%" maxW="1200px" align="center" justifyContent="space-between" >
      <Logo />
      <Social />
    </Flex>
  )
}
