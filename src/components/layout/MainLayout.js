import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mx={["0", "0", "0", "15rem"]}
    >
      <Navbar />
      {children}
    </Flex>
  );
};

export default MainLayout;
