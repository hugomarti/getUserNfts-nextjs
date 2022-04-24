import { Flex, SimpleGrid } from "@chakra-ui/react";
import UserNft from "../src/components/userNfts/UserNft";

export default function Home() {
  return (
    <Flex w="100vw" px="2rem">
      <SimpleGrid columns={2} w="100%">
        <UserNft
          label="Non Enumerable"
          contractAddress="0xD7bEA2b69C7a1015aAdAA134e564eEe6d34149C0"
          defaultOwnerAddress="0xCd0f7648696F1Cd381BcbAA99f64A6EDcf641F1a"
        />
        <UserNft
          label="Enumerable"
          contractAddress="0x9b8b9c7C02be0bD0AA4D669bF6a1f6003424c6Dc"
          defaultOwnerAddress="0x774e07d068d952dfd5e1c432e9f65010f4f823eb"
        />
      </SimpleGrid>
    </Flex>
  );
}
