import {
  Button,
  Flex,
  Stack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AuthenticateModal from "../modals/authenticateModal/AuthenticateModal";
import SwitchNetworkModal from "../modals/SwitchNetworkModal";

export default function Navbar() {
  const {
    isAuthenticated,
    isLoggingOut,
    user,
    logout,
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    authenticate,
    isAuthenticating,
  } = useMoralis();

  const router = useRouter();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  const signOut = () => {
    logout();
  };

  return (
    <>
      <SwitchNetworkModal />

      <Flex
        w="100vw"
        pt="1rem"
        px={["2rem", "2rem", "2rem", "15rem"]}
        alignItems="center"
        justifyContent="space-between"
        display={["none", "flex"]}
      >
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => router.push("/")}
          cursor="pointer"
          spacing="1rem"
        >
          <Text fontWeight="bold" fontSize="3xl" pb="0.4rem">
            Galaxis
          </Text>
        </Stack>
        {/* <Flex alignItems="center">
          {isAuthenticated ? (
            <Stack alignItems="center" direction="row" spacing="2rem">
              <Menu>
                <MenuButton
                  as={Avatar}
                  src={user?.attributes?.avatar}
                  cursor="pointer"
                  size="sm"
                />
                <MenuList>
                  <MenuItem
                    fontWeight="semibold"
                    onClick={() =>
                      router.push(`/collectors/${user?.attributes?.ethAddress}`)
                    }
                  >
                    Profile
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                isLoading={isLoggingOut}
              >
                Sign Out
              </Button>
            </Stack>
          ) : (
            <AuthenticateModal
              authenticate={authenticate}
              isAuthenticating={isAuthenticating}
            />
          )}
        </Flex> */}
      </Flex>
    </>
  );
}
