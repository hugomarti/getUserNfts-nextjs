import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import MainLayout from "../src/components/layout/MainLayout";

const breakpoints = ["375px", "676px", "1500px", "1700px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.md = breakpoints[3];

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  breakpoints,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
