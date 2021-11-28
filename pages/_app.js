import {ChakraProvider} from '@chakra-ui/react';
import Layout from '../components/Layouts/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
