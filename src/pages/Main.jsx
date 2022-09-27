import {
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "../components/Card";

const Main = () => {
  return (
    <>
      <Flex bg="white" color="#262626" ml="0" mr="0" p="10">
        <Flex bg="white" width="90vw" gap="2">
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList>
              <Tab>Write-ups</Tab>
              <Tab>Forums</Tab>
              <Button ml="20px" leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                New
              </Button>
              <Spacer />
              <Link color="teal.500" href="#">
                CHECK OUT MORE WRITE-UPS--
              </Link>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  w="90vw"
                  templateColumns="repeat(3, 1fr)"
                  bg="red"
                  gap={6}
                >
                  {[1, 2, 3, 4, 5, 6].map(() => {
                    return (
                      <>
                        <GridItem w="100%">
                          <Card />
                        </GridItem>
                      </>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid
                  w="90vw"
                  templateColumns="repeat(3, 1fr)"
                  bg="red"
                  gap={6}
                >
                  {[1, 2, 3, 4, 5, 6].map(() => {
                    return (
                      <>
                        <GridItem w="100%">
                          <Card />
                        </GridItem>
                      </>
                    );
                  })}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
