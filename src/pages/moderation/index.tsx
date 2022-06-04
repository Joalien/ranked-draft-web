import { Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Navigation } from "../../components/navigation/Navigation";
import { Moderation } from "../../containers/Moderation";

const Index = () => {
  return (
    <Flex>
      <Navigation />
      <Moderation />
    </Flex>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "moderation"])),
    },
  };
}

export default Index;
