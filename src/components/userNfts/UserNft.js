import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import { useMoralisCloudFunction } from "react-moralis";
import { useState } from "react";

export default function UserNft({
  label,
  defaultOwnerAddress,
  contractAddress,
}) {
  const [ownerAddress, setOwnerAddress] = useState(defaultOwnerAddress);
  const [chainId, setChainId] = useState("eth");

  const { data, isLoading, fetch } = useMoralisCloudFunction(
    "getNftUsers",
    {
      chainId: chainId,
      tokenAddresses: contractAddress,
      ownerAddress: ownerAddress,
    },
    { autoFetch: false } // If you dont want to be fecth manually with a button, you can remove this line and the fetch will be auto with a useEffect
  );

  return (
    <Stack my="1rem">
      <Heading>{label}</Heading>
      <Stack w="25rem" spacing="1rem" size="sm">
        <FormControl>
          <FormLabel htmlFor="userAddress">Owner Address</FormLabel>
          <Input
            size="sm"
            id="userAddress"
            value={ownerAddress}
            onChange={(e) => setOwnerAddress(e.target.value)}
          />
        </FormControl>
        <Flex>
          <Select
            value={chainId}
            onChange={(e) => setChainId(e.target.value)}
            size="sm"
          >
            <option value="eth">Mainnet</option>
            <option value="rinkeby">Rinkeby</option>
          </Select>
          <Button
            size="sm"
            ml="1rem"
            onClick={() => fetch()}
            isLoading={isLoading}
          >
            Search
          </Button>
        </Flex>
      </Stack>

      <SimpleGrid columns={3} spacing="1rem" pt="2rem">
        {data?.result?.map((e, idx) => {
          const metadataRes = JSON.parse(e.metadata);
          return (
            <Flex key={idx} flexDirection="column" w="12rem">
              <Flex w="12rem" h="12rem">
                <Image
                  objectFit="cover"
                  alt="nftImage"
                  src={metadataRes?.image}
                />
              </Flex>
              <Stack bg="gray.900" p="0.5rem" fontSize="sm">
                <Text>{metadataRes?.name}</Text>
                <Flex justifyContent="flex-end">
                  <Text color="gray.500">#{e?.token_id}</Text>
                </Flex>
              </Stack>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}
