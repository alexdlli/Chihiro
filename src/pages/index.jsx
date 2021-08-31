import { Box } from "@chakra-ui/react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box
      bgGradient='linear-gradient(90deg, rgba(96,140,116,1) 0%, rgba(55,101,98,1) 53%, rgba(30,76,87,1) 100%)'
    >
      <Header />
      <Content />
    </Box>
  )
}
