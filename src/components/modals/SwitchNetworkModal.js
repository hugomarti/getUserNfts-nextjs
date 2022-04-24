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
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useChain, useMoralis } from "react-moralis";

const SwitchNetworkModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { switchNetwork, chainId } = useChain();
  const { isWeb3Enabled } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) {
      if (chainId !== "0x4") {
        onOpen();
      }
    }
  }, [chainId, isWeb3Enabled]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text color="red.200" fontWeight="semibold">
                Wrong network...
              </Text>
              <Text color="gray.300">
                Press the button below to connect to Ethereum Rinkeby Testnet.
              </Text>
            </Stack>
            <Flex mt="1rem" justifyContent="flex-end">
              <Button
                variant="outline"
                size="sm"
                colorScheme="yellow"
                onClick={() => {
                  switchNetwork("0x4");
                  onClose();
                }}
              >
                Connect
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SwitchNetworkModal;
