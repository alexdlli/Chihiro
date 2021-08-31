import { Flex, Image } from "@chakra-ui/react";
import { Main } from "./Main";

export function Content() {
  return (
    <Flex my="75px" mx="auto" w="100%" maxW="1200px" direction={['column-reverse', 'column-reverse', 'column-reverse', 'row' ]}>
      <Main />
      <Image alt="Imagem de dois fantasminhas fofos chamados de sem face" transform="translateY(15px)" mx={["auto", "auto" ,"auto"]} w={['300px', '400px', '500px']} src="/ilustracao.png"/>
    </Flex>
  )
}
