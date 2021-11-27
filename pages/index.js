import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a front-end developer based in Depok!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yos Sularko
          </Heading>
          <p>Digital (front-end developer, android developer, graphic designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page