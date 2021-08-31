import { Flex, Image, Link } from "@chakra-ui/react";

export function Social() {
  return (
    <Flex>
      <Link href="https://www.facebook.com/StudioGhibliBrasil/" isExternal>
        <Image src="/facebook.svg" alt="facebook" />
      </Link>
      <Link ml="1.875rem" href="https://www.instagram.com/ghiblibrasil" isExternal>
        <Image  src="/instagram.svg" alt="instagram" />
      </Link>
      <Link ml="1.875rem" href="https://twitter.com/GhibliBrasil" isExternal>
        <Image src="/twitter.svg" alt="twitter" />
      </Link>
      <Link ml="1.875rem" href="https://www.youtube.com/watch?v=pRk2WeN3uog" isExternal>
        <Image src="/youtube.svg" alt="youtube" />
      </Link>
    </Flex>
  )
}
