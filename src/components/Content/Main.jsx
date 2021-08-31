import { Box, Button, Flex, Icon, Image, Link, Text, useDisclosure } from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

export function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column" w="100%" maxW="445px" mx="auto" pl="2">
      <Box mb="1.5625rem">
        <Text mb="0.875rem" lineHeight="1.875rem" fontSize="1.25rem" fontWeight="bold">HAYAO MIYAZAKI</Text>
        <Text fontSize="4.25rem" fontWeight="900" lineHeight="4.6325rem">A VIAGEM <br /> DE CHIHIRO</Text>
      </Box>
      <Text w={["310px", "330px", "445px"]} lineHeight="1.8rem">Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</Text>
    
      <Flex mt="46px">
        <Button w="225px" h="45px" mr="4" transform='skew(-35deg)' border="none" borderRadius="none" bg="#658E76" colorScheme="green">
          <Link href="https://www.justwatch.com/br/filme/a-viagem-de-chihiro" isExternal>
            <Text transform='skew(35deg)' w="100%" textAlign="center">
              <Icon as={FiPlay} mr="1"/> 
              ASSITIR AGORA
            </Text>
          </Link>
        </Button> 
        <Button
          display={['none',
          'block']}
          w="225px"
          h="45px"
          transform='skew(-35deg)'
          border="2px"
          borderColor="#658E76"
          borderRadius="none"
          bg="transparent"
          colorScheme="green"
          onClick={onOpen}
        >
            <Text transform='skew(35deg)' w="100%" textAlign="center">
              ASSISTA O TRAILER
            </Text>
          </Button> 
      </Flex>

      <Modal 
        isCentered
        size="2xl"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        
      >
        <ModalOverlay />
        <ModalContent >
          <ModalCloseButton color="green.700" />
          <ModalBody bg="green.100" display="flex" alignItems="center" justifyItems="center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SgZI655GgHk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
