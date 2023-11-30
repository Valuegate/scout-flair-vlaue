import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarWithHeader from '../components/SidebarContent';
import NotificationCard from '../components/Notifiationomponnt';

const Dashboard = () => {
  return (
    <SidebarWithHeader>
      <Box w="full" h="full">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent={['center', 'center', 'center', 'space-between']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          w="full"
        >
          <Box
            w={['full', 'full', 'full', '45%']}
            h="100%"
            borderRadius="16px"
            p="1rem"
            m="1rem"
            display="flex"
            alignItems="center"
            bg="rgba(242, 170, 198, 1)"
            justifyContent="center"
            flexDirection="column"
          >
            <Box display="flex" w="full" justifyContent="space-between">
              <Text
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1.1rem"
              >
                Recent Orders
              </Text>
              <Text
                as="a"
                href="/orders"
                cursor="pointer"
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1rem"
              >
                See All
              </Text>
            </Box>
            <Box w="full">
              <NotificationCard/>
            </Box>
          </Box>
          <Box
            w={['full', 'full', 'full', '45%']}
            minH="332px"
            borderRadius="16px"
            p="1rem"
            m="1rem"
            display="flex"
            alignItems={['center', 'flex-start']}
            bg="rgba(242, 170, 198, 1)"
            justifyContent="center"
            flexDirection="column"
          >
            <Box display="flex" w="full" justifyContent="space-between">
              <Text
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1.1rem"
              >
                Top Products
              </Text>
              <Text
                as="a"
                href="/product"
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                cursor="pointer"
                fontSize="1rem"
              >
                See All
              </Text>
            </Box>

            <Box display="flex" w="full" flexDirection="column">
              
            </Box>
          </Box>
        </Box>
        {/* ................................................. */}
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;