import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import {ChevronRightIcon} from '@chakra-ui/icons'
import Section from "../components/section";
import Paragraph from "../components/paragraph";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("gray.200", "whiteAlpha.200")}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a front-end developer based in Depok!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yos Sularko
          </Heading>
          <p>
            Digital (front-end developer, android developer, graphic designer)
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/yossularko.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum{" "}
        <NextLink href="/works/inkdrop">
          <Link>Inkdrop</Link>
        </NextLink>
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
        </NextLink>
      </Box>
      </Section>
    </Container>
  );
};

export default Page;
