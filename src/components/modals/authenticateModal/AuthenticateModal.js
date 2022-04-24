import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Stack,
  ModalCloseButton,
  Text,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { connectors } from "./config";
import Image from "next/image";

const AuthenticateModal = ({ authenticate, isAuthenticating }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={onOpen}
        isLoading={isAuthenticating}
        colorScheme="yellow"
      >
        Sign In
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} mt="1rem">
              {connectors.map((e, idx) => (
                <Stack key={idx} alignItems="center" mb="2rem">
                  <Stack
                    cursor="pointer"
                    onClick={async () => {
                      try {
                        await authenticate({ provider: e.connectorId });
                        window.localStorage.setItem(
                          "connectorId",
                          e.connectorId
                        );
                      } catch (e) {
                        console.error(e);
                      }
                    }}
                  >
                    <Image height={50} width={50} src={e.icon} />
                    <Text color="gray.300">{e.title}</Text>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthenticateModal;
